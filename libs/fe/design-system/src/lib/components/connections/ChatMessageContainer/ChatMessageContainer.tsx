import { FunctionComponent } from 'react';
import {
  ChatMessage as Message,
  MessageConnection,
} from '@gliondar/shared/types';
import { ChatMessage } from '../ChatMessage';
import { Box } from '@mui/material';

type Props = {
  messages: MessageConnection;
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
      {messages.edges.map((message, index) => {
        return (
          <ChatMessage
            key={message.node.id}
            sentByMe={false}
            message={message.node}
          />
        );
      })}
    </Box>
  );
};
