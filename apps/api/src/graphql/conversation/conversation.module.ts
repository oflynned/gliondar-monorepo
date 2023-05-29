import { Module } from '@nestjs/common';
import { ConversationResolver } from './conversation.resolver';
import { ChatModule, ContactModule } from '@gliondar/be/domain';

@Module({
  imports: [ChatModule, ContactModule],
  providers: [ConversationResolver],
})
export class ConversationModule {}
