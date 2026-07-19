import {
  Injectable,
  UnauthorizedException,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

import * as bcrypt from 'bcrypt';
import { Resend } from 'resend';

import { User } from '../users/entities/user.entity';

import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { SendOtpDto } from './dto/send-otp.dto';
import { VerifyOtpDto } from './dto/verify-otp.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,

    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {}

  async register(dto: RegisterDto) {
    const existingUser = await this.usersRepository.findOne({
      where: { email: dto.email },
    });

    if (existingUser) {
      throw new BadRequestException('Email already exists');
    }

    const hashedPassword = await bcrypt.hash(dto.password, 10);

    const user = this.usersRepository.create({
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
      role: dto.role,
      governorate: dto.governorate,
    });

    await this.usersRepository.save(user);

    // Automatically trigger OTP after registration
    await this.sendOtp({ email: dto.email });

    return {
      message: 'User registered successfully. Please verify your email.',
      userId: user.id,
    };
  }

  async login(dto: LoginDto) {
    const user = await this.usersRepository.findOne({
      where: { email: dto.email },
      select: ['id', 'email', 'name', 'password'],
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(
      dto.password,
      user.password as string,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: user.id,
      email: user.email,
    };

    const accessToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('JWT_SECRET') as string,
      expiresIn: '15m',
    });

    const refreshToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>(
        'JWT_REFRESH_SECRET',
      ) as string,
      expiresIn: '7d',
    });

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }

  async sendOtp(dto: SendOtpDto) {
    const user = await this.usersRepository.findOne({
      where: { email: dto.email },
    });

    if (!user) {
      throw new BadRequestException('User not found');
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = new Date();
    expiry.setMinutes(expiry.getMinutes() + 10); // 10 minutes expiry

    user.otpCode = otp;
    user.otpExpiresAt = expiry;
    await this.usersRepository.save(user);

    this.logger.log(`OTP for ${dto.email}: ${otp}`);

    await this.sendOtpEmail(dto.email, otp);

    return {
      message: 'OTP sent successfully',
    };
  }

  async verifyOtp(dto: VerifyOtpDto) {
    const user = await this.usersRepository.findOne({
      where: { email: dto.email },
      select: ['id', 'email', 'otpCode', 'otpExpiresAt'],
    });

    if (!user || !user.otpCode || !user.otpExpiresAt) {
      throw new BadRequestException('Invalid OTP request');
    }

    if (new Date() > user.otpExpiresAt) {
      throw new BadRequestException('OTP expired');
    }

    if (user.otpCode !== dto.code) {
      throw new BadRequestException('Invalid OTP code');
    }

    // Mark as verified and clear OTP
    user.isVerified = true;
    user.otpCode = null;
    user.otpExpiresAt = null;
    await this.usersRepository.save(user);

    return {
      message: 'OTP verified successfully. You can now login.',
    };
  }

  async refresh(userId: string, email: string) {
    const payload = {
      sub: userId,
      email,
    };

    const accessToken = await this.jwtService.signAsync(payload, {
      secret: this.configService.get<string>('JWT_SECRET') as string,
      expiresIn: '15m',
    });

    return {
      accessToken,
    };
  }

  async logout() {
    return {
      message: 'Logged out successfully',
    };
  }

  async sendOtpEmail(email: string, otp: string) {
    try {
      const nodemailer = require('nodemailer');

      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'uni.guides.ai@gmail.com',
          pass: this.configService.get<string>('GMAIL_APP_PASSWORD'),
        },
      });

      await transporter.sendMail({
        from: '"FuturePath" <uni.guides.ai@gmail.com>',
        to: email,
        subject: 'FuturePath Verification Code',
        html: `
          <div style="font-family: Arial, sans-serif; padding:20px; border: 1px solid #eee; border-radius: 10px;">
            <h2 style="color: #2563eb;">FuturePath Verification</h2>
            <p>Your verification code is:</p>
            <h1 style="color: #1e40af; letter-spacing: 5px;">${otp}</h1>
            <p>This code is valid for 10 minutes.</p>
            <hr style="border: 0; border-top: 1px solid #eee;">
            <p style="font-size: 12px; color: #666;">If you didn't request this, please ignore this email.</p>
          </div>
        `,
      });

      this.logger.log(`OTP email sent to ${email}`);
    } catch (error) {
      this.logger.error('Failed to send OTP email', error);
    }
  }
}