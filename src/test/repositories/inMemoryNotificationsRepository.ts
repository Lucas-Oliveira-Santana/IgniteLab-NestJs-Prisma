import { Notification } from '../../application/entities/notification';
import { NotificationsRepository } from '../../application/repositories/notificationsRepository';

export class inMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }
}
