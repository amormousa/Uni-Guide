import { NestFactory } from '@nestjs/core';
import { AppModule } from '../src/app.module';
import { AuthService } from '../src/modules/auth/auth.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const authService = app.get(AuthService);

  const testEmail = 'uni.guides.ai@gmail.com'; // Testing by sending to self
  console.log(`Attempting to send a test OTP to ${testEmail}...`);

  try {
    await authService.sendOtpEmail(testEmail, '123456');
    console.log('✅ Test email sent successfully!');
  } catch (error) {
    console.error('❌ Failed to send test email:', error);
  } finally {
    await app.close();
  }
}

bootstrap();
