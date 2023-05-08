import { Args, Query, Resolver } from '@nestjs/graphql';
import {
  ContentLanguage,
  Conversation,
  MessageEdge,
  MessageStatus,
} from '@gliondar/shared/types';
import { curatedConversations, nativeSpeaker } from '@gliondar/be/mock-data';

@Resolver('Conversation')
export class ConversationResolver {
  @Query('getConversations')
  async getConversations(): Promise<Conversation[]> {
    return curatedConversations.map((conversation): Conversation => {
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
    @Args('id') id: string
  ): Promise<Conversation | null> {
    return {
      __typename: 'Conversation',
      id: 'conversation-0',
      unreadCount: 1,
      partner: {
        ...nativeSpeaker,
        profile: nativeSpeaker.profile,
      },
      messages: {
        count: 0,
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
                ...nativeSpeaker,
                profile: nativeSpeaker.profile,
              },
            },
          },
        ],
      },
    };
  }
}
