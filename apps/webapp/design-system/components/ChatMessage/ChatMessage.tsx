import { Box, BoxProps, styled, Tooltip, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import { Message } from '../../../mock-data';
import { Flex } from '../../atoms';

type Props = BoxProps & {
  message: Message;
  sentByMe: boolean;
};

const Container = styled(Box)(({ theme }) => ({
  width: 'fit-content',
  alignSelf: 'center',
  maxWidth: '50%',
  height: 'fit-content',
  background: theme.palette.primary.light,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  transition: '0.3s all ease-in-out',
  '&:hover': {
    background: theme.palette.primary.main,
    cursor: 'pointer',
  },
}));

export const ChatMessage: FunctionComponent<Props> = ({
  message,
  sentByMe,
}) => {
  return (
    <Flex gap={1} justifyContent={sentByMe ? 'flex-end' : 'flex-start'}>
      <Tooltip
        title={message.sentAt.toLocaleString()}
        placement={sentByMe ? 'left' : 'right'}
      >
        <Container>
          <Typography>{message.message}</Typography>
        </Container>
      </Tooltip>
    </Flex>
  );
};
