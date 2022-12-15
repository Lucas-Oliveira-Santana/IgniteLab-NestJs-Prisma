import { inMemoryNotificationsRepository } from '../../test/repositories/inMemoryNotificationsRepository';
import { SendNotification } from './sendNotification';

describe('Send notification', () => {
  it('should be able to send notification', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      content: 'this is a notification',
      category: 'social',
      recipientId: 'example-id',
    });
    expect(notification.content.value).toBe('this is a notification');
    expect(notification.category).toBe('social');
    expect(notification.recipientId).toBe('example-id');
    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
