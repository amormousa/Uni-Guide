import { Module } from '@nestjs/common';
import { AppConfigModule } from './config/app.config';
import { DatabaseModule } from './config/database.config';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { CollegesModule } from './modules/colleges/colleges.module';
import { QuizModule } from './modules/quiz/quiz.module';
import { AiModule } from './modules/ai/ai.module';
import { AnalyticsModule } from './modules/analytics/analytics.module';
import { NotificationsModule } from './modules/notifications/notifications.module';

import { AppController } from './app.controller';

@Module({
  imports: [
    AppConfigModule,
    DatabaseModule,
    AuthModule,
    UsersModule,
    CollegesModule,
    QuizModule,
    AiModule,
    AnalyticsModule,
    NotificationsModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
