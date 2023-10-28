import { FunctionComponent } from 'react';
import { Avatar, Flex, Stack } from '@gliondar/fe/design-system';
import { Box, styled, Typography } from '@mui/material';
import { Message, User } from '@gliondar/shared/types';

const ConnectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  background: theme.palette.background.default,
  cursor: 'pointer',
  '&:hover': {
    background: theme.palette.background.paper,
  },
}));

type Props = {
  user: User;
  unreadCount?: number;
  lastMessage?: Message;
  onSelectContact?: (user: User) => void;
};

const getMessagePreview = (mostRecentMessage?: Message): string => {
  if (!mostRecentMessage) {
    return 'New connection!';
  }

  // if (user.id === mostRecentMessage.sentBy?.id) {
  //   return `You: ${mostRecentMessage.text}`;
  // }

  return mostRecentMessage.text;
};

export const Contact: FunctionComponent<Props> = ({
  user,
  unreadCount,
  lastMessage,
  onSelectContact,
}) => {
  return (
    <ConnectionContainer onClick={() => onSelectContact?.(user)}>
      <Avatar user={user} />
      <Stack justifyContent={'center'} width={'100%'} flex={1}>
        <Typography fontWeight={700}>{user.profile.name}</Typography>
        <Flex justifyContent={'space-between'}>
          <Typography
            variant={'body2'}
            overflow={'hidden'}
            whiteSpace={'nowrap'}
            textOverflow={'ellipsis'}
            width={192}
          >
            {getMessagePreview(lastMessage)}
          </Typography>
        </Flex>
      </Stack>
    </ConnectionContainer>
  );
};
