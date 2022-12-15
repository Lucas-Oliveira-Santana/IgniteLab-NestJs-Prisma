import { Module } from '@nestjs/common';
import { SendNotification } from '../../application/useCases/sendNotification';
import { DatabaseModule } from '../database/database.module';
import { notificationsController } from './controllers/notifications.controller';

@Module({
  imports: [DatabaseModule],
  controllers: [notificationsController],
  providers: [SendNotification],
})
export class HttpModule {}
