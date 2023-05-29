import { Args, Query, Resolver } from '@nestjs/graphql';
import {
  ContentLanguage,
  Conversation,
  MessageEdge,
  MessageStatus,
} from '@gliondar/shared/types';
import { ChatService } from '@gliondar/be/domain';

@Resolver('Conversation')
export class ConversationResolver {
  constructor(private readonly chatService: ChatService) {}

  @Query('getConversations')
  async getConversations(): Promise<Conversation[]> {
    const conversations = await this.chatService.getConversations();

    return conversations.map((conversation): Conversation => {
      return {
        __typename: 'Conversation',
        id: conversation.id,
        partner: {
          ...conversation.partner,
          profile: conversation.partner.profile,
        },
        unreadCount: conversation.unreadCount,
        messages: {
          count: conversation.messages.length,
          edges: conversation.messages.map((message): MessageEdge => {
            return {
              cursor: message.id,
              node: {
                ...message,
                sentBy: {
                  ...message.sentBy,
                  profile: message.sentBy.profile,
                },
                sentTo: null,
                status: MessageStatus.DELIVERED,
                language: ContentLanguage.IRISH,
              },
            };
          }),
        },
      };
    });
  }

  @Query('getConversationById')
  async getConversationById(
    @Args('id') userId: string
  ): Promise<Conversation | null> {
    const conversation = await this.chatService.getConversationByPartnerUserId(
      userId
    );

    if (!conversation) {
      return null;
    }

    return {
      __typename: 'Conversation',
      ...conversation,
      unreadCount: 1,
      partner: {
        ...conversation.partner,
        profile: conversation.partner.profile,
      },
      messages: {
        count: 1,
        edges: [
          {
            cursor: 'message-0',
            node: {
              id: 'message-0',
              language: ContentLanguage.IRISH,
              status: MessageStatus.DELIVERED,
              sentTo: null,
              createdAt: new Date(),
              text: 'Haha go maith',
              sentBy: {
                ...conversation.partner,
                profile: conversation.partner.profile,
              },
            },
          },
        ],
      },
    };
  }
}
