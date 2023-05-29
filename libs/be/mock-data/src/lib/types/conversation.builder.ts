import { Conversation } from './conversation';
import { Message } from './message';
import { User } from './user';

export class ConversationBuilder {
  private readonly conversation: Conversation;

  constructor() {
    this.conversation = new Conversation();
  }

  setId(id: string): ConversationBuilder {
    this.conversation.id = id;
    return this;
  }

  setCreatedAt(createdAt: Date): ConversationBuilder {
    this.conversation.createdAt = createdAt;
    return this;
  }

  setMessages(messages: Message[]): ConversationBuilder {
    this.conversation.messages = messages;
    return this;
  }

  setPartner(partner: User): ConversationBuilder {
    this.conversation.partner = partner;
    return this;
  }

  setUnreadCount(unreadCount: number): ConversationBuilder {
    this.conversation.unreadCount = unreadCount;
    return this;
  }

  build(): Conversation {
    return this.conversation;
  }
}
