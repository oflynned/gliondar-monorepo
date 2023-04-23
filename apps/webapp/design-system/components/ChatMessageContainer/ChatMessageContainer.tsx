import { FunctionComponent } from 'react';
import { Message } from '../../../mock-data';
import { ChatMessage } from '../ChatMessage';
import { Box } from '@mui/material';

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
            sentByMe={index % 3 === 0}
            message={message}
            display={'flex'}
          />
        );
      })}
    </Box>
  );
};
