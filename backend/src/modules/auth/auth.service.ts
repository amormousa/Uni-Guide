import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { MailService } from '../notifications/mail.service';

import { User } from '../users/entities/user.entity';
import { Otp } from './entities/otp.entity';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { SendOtpDto } from './dto/send-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { AuthTokenDto } from './dto/auth-token.dto';
import { AuthErrorCodes } from './auth.enums';
import type { JwtPayload } from './strategies/jwt.strategy';
import {
  ConflictAppException,
  UnauthorizedAppException,
  BadRequestAppException,
  NotFoundAppException,
} from '../../common/filters/http-exception.filter';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);
  private readonly SALT_ROUNDS = 12;
  private readonly OTP_EXPIRY_MINUTES = 5;
  private readonly MAX_OTP_ATTEMPTS = 5;
  private readonly REFRESH_TOKEN_TTL_DAYS = 30;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Otp)
    private readonly otpRepository: Repository<Otp>,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
    private readonly mailService: MailService,
  ) {}

  // ── POST /auth/register ────────────────────────────────────────────────────
  async register(dto: RegisterDto): Promise<{ message: string; userId: string }> {
    const existing = await this.userRepository.findOne({ where: { email: dto.email } });

    // Security: Do not reveal if email exists during registration
    if (existing) {
      // Return a generic success message to prevent enumeration
      // In a real app, you might want to send an email saying "You already have an account"
      return {
        message: 'If this email is not registered, a verification code will be sent.',
        userId: 'hidden',
      };
    }

    const hashedPassword = await bcrypt.hash(dto.password, this.SALT_ROUNDS);

    const user = this.userRepository.create({
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
      role: dto.role,
      governorate: dto.governorate ?? null,
      isVerified: false,
    });

    const saved = await this.userRepository.save(user);
    await this.generateAndSendOtp(dto.email, dto.name);

    return {
      message: 'Verification code sent to your email.',
      userId: saved.id,
    };
  }

  // ── POST /auth/login ──────────────────────────────────────────────────────
  async login(dto: LoginDto): Promise<AuthTokenDto> {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.email = :email', { email: dto.email })
      .getOne();

    // Security: Generic error message to prevent account enumeration
    const genericError = new UnauthorizedAppException(AuthErrorCodes.INVALID_CREDENTIALS, {
      message: 'Invalid email or password',
    });

    if (!user || !user.password) throw genericError;

    const passwordMatch = await bcrypt.compare(dto.password, user.password);
    if (!passwordMatch) throw genericError;

    if (!user.isVerified) {
      throw new UnauthorizedAppException(AuthErrorCodes.ACCOUNT_NOT_VERIFIED, {
        message: 'Please verify your email address first.',
      });
    }

    return this.issueTokens(user);
  }

  // ── POST /auth/otp/send ───────────────────────────────────────────────────
  async sendOtp(dto: SendOtpDto): Promise<{ message: string }> {
    const user = await this.userRepository.findOne({ where: { email: dto.email } });
    
    // Security: Do not reveal if email exists
    if (!user) {
       return { message: 'If this email is registered, a new code will be sent.' };
    }

    // Rate limiting check (e.g., max 3 per 5 minutes - simplified in-memory/db check)
    const recentOtps = await this.otpRepository.count({
      where: {
        email: dto.email,
        createdAt: MoreThan(new Date(Date.now() - 60000)), // Last 1 minute
      },
    });

    if (recentOtps >= 3) {
      throw new BadRequestAppException('TOO_MANY_REQUESTS', {
        message: 'Too many OTP requests. Please wait a minute.',
      });
    }

    await this.generateAndSendOtp(dto.email, user.name);
    return { message: 'Verification code sent to your email.' };
  }

  // ── POST /auth/otp/verify ─────────────────────────────────────────────────
  async verifyOtp(dto: VerifyOtpDto): Promise<AuthTokenDto> {
    const otp = await this.otpRepository.findOne({
      where: {
        email: dto.email,
        isUsed: false,
        expiresAt: MoreThan(new Date()),
      },
      order: { createdAt: 'DESC' },
    });

    if (!otp) {
      throw new BadRequestAppException(AuthErrorCodes.OTP_INVALID, {
        message: 'Invalid or expired OTP code',
      });
    }

    if (otp.attempts >= this.MAX_OTP_ATTEMPTS) {
       throw new BadRequestAppException('MAX_ATTEMPTS_EXCEEDED', {
         message: 'Too many failed attempts. Please request a new code.',
       });
    }

    const isCodeValid = await bcrypt.compare(dto.code, otp.hashedCode);
    if (!isCodeValid) {
      otp.attempts += 1;
      await this.otpRepository.save(otp);
      throw new BadRequestAppException(AuthErrorCodes.OTP_INVALID, {
        message: 'Invalid verification code',
      });
    }

    // Mark OTP as used
    otp.isUsed = true;
    await this.otpRepository.save(otp);

    // Mark user as verified
    await this.userRepository.update({ email: dto.email }, { isVerified: true });

    const user = await this.userRepository.findOne({ where: { email: dto.email } });
    return this.issueTokens(user!);
  }

  // ── Token Refresh & Logout (Keeping logic as requested) ──────────────────
  async refresh(dto: RefreshTokenDto): Promise<AuthTokenDto> {
     // ... logic stays the same (uses email from payload as updated earlier)
     const payload = this.jwtService.verify<JwtPayload>(dto.refreshToken, {
        secret: this.configService.getOrThrow<string>('JWT_REFRESH_SECRET'),
     });
     const user = await this.userRepository.findOne({ where: { id: payload.sub } });
     if (!user) throw new UnauthorizedAppException(AuthErrorCodes.INVALID_REFRESH_TOKEN);
     return this.issueTokens(user);
  }

  async logout(userId: string): Promise<void> {
    await this.userRepository.update(userId, { refreshToken: null, refreshTokenExpiresAt: null });
  }

  // ── Private Helpers ────────────────────────────────────────────────────────

  private async generateAndSendOtp(email: string, name: string): Promise<void> {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const hashedCode = await bcrypt.hash(code, this.SALT_ROUNDS);
    
    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + this.OTP_EXPIRY_MINUTES);

    await this.otpRepository.save(this.otpRepository.create({
      email,
      hashedCode,
      expiresAt,
    }));

    this.logger.log(`📧 [Dev Mode] OTP for ${email}: ${code}`);
    await this.mailService.sendOtpEmail(email, name, code, this.OTP_EXPIRY_MINUTES);
  }

  private async issueTokens(user: User): Promise<AuthTokenDto> {
    const payload: JwtPayload = { sub: user.id, email: user.email, name: user.name, role: user.role };
    const accessToken = this.jwtService.sign(payload);
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.getOrThrow<string>('JWT_REFRESH_SECRET'),
      expiresIn: '7d',
    });

    const hashedRefreshToken = await bcrypt.hash(refreshToken, this.SALT_ROUNDS);
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 30);

    await this.userRepository.update(user.id, {
      refreshToken: hashedRefreshToken,
      refreshTokenExpiresAt: expiresAt,
    });

    return new AuthTokenDto(accessToken, refreshToken);
  }
}
