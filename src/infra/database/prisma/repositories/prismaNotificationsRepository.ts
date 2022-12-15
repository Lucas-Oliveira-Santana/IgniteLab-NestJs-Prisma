import { Injectable } from '@nestjs/common';
import { Notification } from '../../../../application/entities/notification';
import { NotificationsRepository } from '../../../../application/repositories/notificationsRepository';
import { PrismaService } from '../prisma.service';

@Injectable()
class prismaNotificationsRepository implements NotificationsRepository {
  constructor(private prismaService: PrismaService) {}

  async create({
    category,
    content,
    recipientId,
    readAt,
    createdAt,
    id,
  }: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: id,
        category,
        content: content.value,
        recipientId,
        readAt,
        createdAt,
      },
    });
  }
}

export { prismaNotificationsRepository };
