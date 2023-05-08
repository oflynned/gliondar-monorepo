import { User } from './user';

export class Message {
  id: string;
  createdAt: Date;
  text: string;
  sentBy: User;
  sentTo: User;
}
