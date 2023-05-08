import { Conversation, MessageBuilder, User } from '../types';
import { beginner, enthusiasticLearner, nativeSpeaker } from './users';

export const curatedConversations: Conversation[] = [
  {
    id: 'conversation-0',
    partner: enthusiasticLearner,
    unreadCount: 1,
    createdAt: new Date(),
    messages: [
      new MessageBuilder()
        .setId('message-0')
        .setSentBy(enthusiasticLearner)
        .setText('Haha yeah')
        .setCreatedAt(new Date())
        .build(),
    ],
  },
  {
    id: 'conversation-1',
    partner: nativeSpeaker,
    unreadCount: 0,
    createdAt: new Date(),
    messages: [
      new MessageBuilder()
        .setId('message-0')
        .setSentBy(nativeSpeaker)
        .setText('Conas atá tú?')
        .setCreatedAt(new Date())
        .build(),
    ],
  },
];
