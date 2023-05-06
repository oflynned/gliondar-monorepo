import { FunctionComponent } from 'react';
import { ChatMessage as Message } from '@gliondar/shared/types';
import { ChatMessage } from '../ChatMessage';
import { Box } from '@gliondar/fe/mui';

type Props = {
  messages: Message[];
};

export const ChatMessageContainer: FunctionComponent<Props> = ({
  messages,
}) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column-reverse'}
      gap={1}
      overflow={'scroll'}
      padding={2}
      width={'100%'}
    >
      {messages.map((message, index) => {
        return (
          <ChatMessage
            key={message.id}
            sentByMe={index % 3 === 0}
            message={message}
            display={'flex'}
          />
        );
      })}
    </Box>
  );
};
