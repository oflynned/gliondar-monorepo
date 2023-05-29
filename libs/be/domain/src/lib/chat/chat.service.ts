import { Injectable } from '@nestjs/common';
import { Conversation, curatedConversations } from '@gliondar/be/mock-data';

@Injectable()
export class ChatService {
  async getConversations(): Promise<Conversation[]> {
    return curatedConversations;
  }

  async getConversationByPartnerUserId(
    userId: string
  ): Promise<Conversation | null> {
    const conversation = curatedConversations.find(
      (conversation) => conversation.partner.id === userId
    );

    return conversation ?? null;
  }
}
