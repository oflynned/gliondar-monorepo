import { Message } from './message';
import { User } from './user';

export class MessageBuilder {
  private readonly message: Message;

  constructor() {
    this.message = new Message();
  }

  setId(id: string): MessageBuilder {
    this.message.id = id;
    return this;
  }

  setCreatedAt(createdAt: Date): MessageBuilder {
    this.message.createdAt = createdAt;
    return this;
  }

  setText(text: string): MessageBuilder {
    this.message.text = text;
    return this;
  }

  setSentBy(user: User): MessageBuilder {
    this.message.sentBy = user;
    return this;
  }

  setSentTo(user: User): MessageBuilder {
    this.message.sentTo = user;
    return this;
  }

  build(): Message {
    return this.message;
  }
}
