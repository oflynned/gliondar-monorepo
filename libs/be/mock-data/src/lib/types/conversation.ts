import { User } from './user';
import { Message } from './message';

export class Conversation {
  id: string;
  createdAt: Date;
  unreadCount: number;
  partner: User;
  messages: Message[];
}
