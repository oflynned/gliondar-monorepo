import { Injectable } from '@nestjs/common';
import { Conversation, curatedConversations } from '@gliondar/be/mock-data';

@Injectable()
export class ChatService {
  async getConversations(): Promise<Conversation[]> {
    return curatedConversations;
  }

  // TODO this makes no sense to do this way, but it's fine for now
  //      since we assume we are the only person logged in
  async getConversationByPartnerUserId(
    userId: string
  ): Promise<Conversation | null> {
    const conversation = curatedConversations.find(
      (conversation) => conversation.partner.id === userId
    );

    return conversation ?? null;
  }
}
