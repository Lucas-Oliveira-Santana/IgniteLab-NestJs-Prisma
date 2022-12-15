import { Module } from '@nestjs/common';
import { NotificationsRepository } from '../../application/repositories/notificationsRepository';
import { PrismaService } from './prisma/prisma.service';
import { prismaNotificationsRepository } from './prisma/repositories/prismaNotificationsRepository';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: prismaNotificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
