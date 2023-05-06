import { FunctionComponent } from 'react';
import { Avatar, Flex, Stack } from '@gliondar/fe/design-system';
import { Box, styled, Typography } from '@gliondar/fe/mui';
import { User } from '@gliondar/shared/types';

const ConnectionContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  padding: theme.spacing(1),
  background: theme.palette.background.default,
  '&:hover': {
    cursor: 'pointer',
    background: theme.palette.background.paper,
  },
}));

type Props = {
  user: User;
  lastMessage?: string;
  onSelectContact?: (user: User) => void;
};

export const Contact: FunctionComponent<Props> = ({
  user,
  lastMessage,
  onSelectContact,
}) => {
  return (
    <ConnectionContainer key={user.id} onClick={() => onSelectContact?.(user)}>
      <Avatar imageUrl={user.avatar?.url} label={user.profile.name} />

      <Stack justifyContent={'center'} width={'100%'}>
        <Typography fontWeight={700}>{user.profile.name}</Typography>
        <Flex justifyContent={'space-between'}>
          <Typography
            overflow={'hidden'}
            whiteSpace={'nowrap'}
            textOverflow={'ellipsis'}
            width={192}
          >
            {lastMessage ?? 'New connection'}
          </Typography>
        </Flex>
      </Stack>
    </ConnectionContainer>
  );
};
