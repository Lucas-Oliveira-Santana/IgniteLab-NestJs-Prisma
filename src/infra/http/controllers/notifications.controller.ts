import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from '../../../application/useCases/sendNotification';
import { CreateNotificationBody } from '../dtos/createNotificationBody';

@Controller('notifications')
export class notificationsController {
  constructor(private sendNotification: SendNotification) {}

  @Post()
  async CreateNotification(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    const { notification } = await this.sendNotification.execute({
      content,
      category,
      recipientId,
    });

    return { notification };
  }
}
