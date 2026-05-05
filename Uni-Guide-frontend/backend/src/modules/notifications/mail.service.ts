import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private readonly logger = new Logger(MailService.name);
  private transporter: nodemailer.Transporter;

  constructor(private configService: ConfigService) {
    this.transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST', 'smtp.gmail.com'),
      port: this.configService.get<number>('MAIL_PORT', 587),
      secure: false,
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASS'),
      },
    });
  }

  async sendOtpEmail(email: string, name: string, code: string, expiryMin: number): Promise<void> {
    const mailUser = this.configService.get<string>('MAIL_USER');
    if (!mailUser) {
      this.logger.warn('MAIL_USER not set — skipping email, read OTP from logs');
      return;
    }

    try {
      await this.transporter.sendMail({
        from: `"UniGuide 🎓" <${mailUser}>`,
        to: email,
        subject: 'Your UniGuide Verification Code',
        html: this.buildOtpEmailHtml(name, code, expiryMin),
      });
      this.logger.log(`✅ OTP email sent to ${email}`);
    } catch (err) {
      this.logger.error(`❌ Failed to send OTP email to ${email}`, err);
      throw new Error('Failed to send verification email');
    }
  }

  private buildOtpEmailHtml(name: string, code: string, expiryMin: number): string {
    return `
      <!DOCTYPE html>
      <html lang="ar" dir="rtl">
      <head>
        <meta charset="UTF-8"/>
        <style>
          body { font-family: 'Segoe UI', Arial, sans-serif; background: #f0f4ff; margin:0; padding:0; }
          .container { max-width:520px; margin:40px auto; background:#fff; border-radius:16px;
                        box-shadow:0 4px 24px rgba(26,107,224,.12); overflow:hidden; }
          .header { background: linear-gradient(135deg,#1a6be0,#00c8e8); padding:32px; text-align:center; }
          .header h1 { color:#fff; margin:0; font-size:24px; letter-spacing:1px; }
          .body { padding:32px 40px; text-align:center; }
          .otp-box { display:inline-block; background:#f0f4ff; border:2px dashed #1a6be0;
                      border-radius:12px; padding:18px 40px; margin:24px 0; }
          .otp-code { font-size:42px; font-weight:900; letter-spacing:12px; color:#1a6be0;
                       font-family:monospace; }
          .note { color:#666; font-size:14px; margin-top:8px; }
          .footer { background:#f8f9ff; padding:16px; text-align:center; color:#aaa; font-size:12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header"><h1>🎓 UniGuide</h1></div>
          <div class="body">
            <p style="color:#333;font-size:18px;">مرحباً <strong>${name}</strong> 👋</p>
            <p style="color:#555;">رمز التحقق الخاص بك لتفعيل حسابك في UniGuide:</p>
            <div class="otp-box">
              <div class="otp-code">${code}</div>
            </div>
            <p class="note">⏱ الرمز صالح لمدة <strong>${expiryMin} دقائق</strong> فقط.</p>
            <p class="note" style="color:#e53935;">لا تشارك هذا الرمز مع أي شخص.</p>
          </div>
          <div class="footer">© 2026 UniGuide — AI-Powered University Guidance</div>
        </div>
      </body>
      </html>
    `;
  }
}
