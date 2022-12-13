import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
import { CreateNotificationBody } from './createNotificationBody';

@Controller('notifications')
export class AppController {
  constructor(private readonly prismaService: PrismaService) {}

  @Get()
  listNotifications() {
    return this.prismaService.notification.findMany();
  }

  @Post()
  async CreateNotification(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body;

    const notification = await this.prismaService.notification.create({
      data: {
        id: randomUUID(),
        content,
        category,
        recipientId,
      },
    });
    return notification;
  }
}
