import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, MoreThan } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import * as bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';

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
  private readonly REFRESH_TOKEN_TTL_DAYS = 30;

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Otp)
    private readonly otpRepository: Repository<Otp>,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  // ── POST /auth/register ────────────────────────────────────────────────────
  async register(dto: RegisterDto): Promise<{ message: string; userId: string }> {
    const existing = await this.userRepository
      .createQueryBuilder('user')
      .where('user.phone = :phone', { phone: dto.phone })
      .getOne();

    if (existing) {
      throw new ConflictAppException(AuthErrorCodes.PHONE_ALREADY_EXISTS, {
        message: 'An account with this phone number already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(dto.password, this.SALT_ROUNDS);

    const user = this.userRepository.create({
      name: dto.name,
      phone: dto.phone,
      password: hashedPassword,
      role: dto.role,
      governorate: dto.governorate ?? null,
      isVerified: false,
    });

    const saved = await this.userRepository.save(user);

    // Auto-send OTP after registration
    await this.generateAndSendOtp(dto.phone);

    return {
      message: `OTP sent to ${dto.phone}`,
      userId: saved.id,
    };
  }

  // ── POST /auth/login ──────────────────────────────────────────────────────
  async login(dto: LoginDto): Promise<AuthTokenDto> {
    const user = await this.userRepository
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.phone = :phone', { phone: dto.phone })
      .getOne();

    if (!user) {
      throw new UnauthorizedAppException(AuthErrorCodes.INVALID_CREDENTIALS, {
        message: 'Invalid phone number or password',
      });
    }

    const passwordMatch = user.password ? await bcrypt.compare(dto.password, user.password) : false;
    if (!passwordMatch) {
      throw new UnauthorizedAppException(AuthErrorCodes.INVALID_CREDENTIALS, {
        message: 'Invalid phone number or password',
      });
    }

    if (!user.isVerified) {
      throw new UnauthorizedAppException(AuthErrorCodes.ACCOUNT_NOT_VERIFIED, {
        message: 'Account not verified. Please verify your phone number with OTP first.',
      });
    }

    return this.issueTokens(user);
  }

  // ── POST /auth/otp/send ───────────────────────────────────────────────────
  async sendOtp(dto: SendOtpDto): Promise<{ message: string }> {
    const user = await this.userRepository.findOne({ where: { phone: dto.phone } });
    if (!user) {
      throw new NotFoundAppException(AuthErrorCodes.USER_NOT_FOUND, {
        message: 'No account found with this phone number',
      });
    }

    await this.generateAndSendOtp(dto.phone);

    return { message: `OTP sent to ${dto.phone}` };
  }

  // ── POST /auth/otp/verify ─────────────────────────────────────────────────
  async verifyOtp(dto: VerifyOtpDto): Promise<AuthTokenDto> {
    const otp = await this.otpRepository.findOne({
      where: {
        phone: dto.phone,
        code: dto.code,
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

    // Mark OTP as used
    otp.isUsed = true;
    await this.otpRepository.save(otp);

    // Mark user as verified
    await this.userRepository
      .createQueryBuilder()
      .update(User)
      .set({ isVerified: true })
      .where('phone = :phone', { phone: dto.phone })
      .execute();

    // Fetch verified user and issue tokens
    const user = await this.userRepository.findOne({ where: { phone: dto.phone } });
    return this.issueTokens(user!);
  }

  // ── POST /auth/refresh ────────────────────────────────────────────────────
  async refresh(dto: RefreshTokenDto): Promise<AuthTokenDto> {
    let payload: JwtPayload;
    try {
      payload = this.jwtService.verify<JwtPayload>(dto.refreshToken, {
        secret: this.configService.getOrThrow<string>('JWT_REFRESH_SECRET'),
      });
    } catch {
      throw new UnauthorizedAppException(AuthErrorCodes.INVALID_REFRESH_TOKEN, {
        message: 'Invalid or expired refresh token',
      });
    }

    const user = await this.userRepository
      .createQueryBuilder('user')
      .addSelect('user.refreshToken')
      .addSelect('user.refreshTokenExpiresAt')
      .where('user.id = :id', { id: payload.sub })
      .getOne();

    if (!user || !user.refreshToken) {
      throw new UnauthorizedAppException(AuthErrorCodes.INVALID_REFRESH_TOKEN, {
        message: 'Invalid or expired refresh token',
      });
    }

    const isTokenValid = await bcrypt.compare(dto.refreshToken, user.refreshToken);
    if (!isTokenValid || (user.refreshTokenExpiresAt && user.refreshTokenExpiresAt < new Date())) {
      throw new UnauthorizedAppException(AuthErrorCodes.INVALID_REFRESH_TOKEN, {
        message: 'Invalid or expired refresh token',
      });
    }

    return this.issueTokens(user);
  }

  // ── POST /auth/logout ─────────────────────────────────────────────────────
  async logout(userId: string): Promise<void> {
    await this.userRepository
      .createQueryBuilder()
      .update(User)
      .set({ refreshToken: null, refreshTokenExpiresAt: null })
      .where('id = :id', { id: userId })
      .execute();
  }

  // ── Private Helpers ────────────────────────────────────────────────────────

  private async generateAndSendOtp(phone: string): Promise<void> {
    // Invalidate any existing unused OTPs for this phone
    await this.otpRepository
      .createQueryBuilder()
      .update(Otp)
      .set({ isUsed: true })
      .where('phone = :phone AND is_used = false', { phone })
      .execute();

    // Generate 6-digit OTP
    const code = Math.floor(100000 + Math.random() * 900000).toString();

    const expiresAt = new Date();
    expiresAt.setMinutes(expiresAt.getMinutes() + this.OTP_EXPIRY_MINUTES);

    const otp = this.otpRepository.create({
      phone,
      code,
      expiresAt,
    });

    await this.otpRepository.save(otp);

    // TODO: Integrate SMS provider (e.g., Twilio, Vonage) to send OTP
    // For development, log the OTP to console
    this.logger.log(`📱 OTP for ${phone}: ${code} (expires in ${this.OTP_EXPIRY_MINUTES} min)`);
  }

  private async issueTokens(user: User): Promise<AuthTokenDto> {
    const payload: JwtPayload = {
      sub: user.id,
      phone: user.phone,
      role: user.role,
    };

    // Access token (short-lived)
    const accessToken = this.jwtService.sign(payload);

    // Refresh token (long-lived, signed with separate secret)
    const refreshToken = this.jwtService.sign(payload, {
      secret: this.configService.getOrThrow<string>('JWT_REFRESH_SECRET'),
      expiresIn: this.configService.get<string>('JWT_REFRESH_EXPIRES_IN', '7d') as any,
    });

    // Store hashed refresh token in DB
    const hashedRefreshToken = await bcrypt.hash(refreshToken, this.SALT_ROUNDS);
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + this.REFRESH_TOKEN_TTL_DAYS);

    await this.userRepository
      .createQueryBuilder()
      .update(User)
      .set({ refreshToken: hashedRefreshToken, refreshTokenExpiresAt: expiresAt })
      .where('id = :id', { id: user.id })
      .execute();

    return new AuthTokenDto(accessToken, refreshToken);
  }
}
