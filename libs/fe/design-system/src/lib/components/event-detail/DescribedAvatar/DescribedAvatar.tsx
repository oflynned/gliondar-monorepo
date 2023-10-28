import { FunctionComponent } from 'react';
import { IconButton, Typography } from '@mui/material';
import { Avatar, Flex, Stack } from '../../../atoms';
import { User } from '@gliondar/shared/types';

type Props = {
  user: User;
  title: string;
  onClick?: () => void;
};

export const DescribedAvatar: FunctionComponent<Props> = ({
  user,
  title,
  onClick,
}) => {
  return (
    <Flex gap={1}>
      <IconButton onClick={() => onClick?.()}>
        <Avatar user={user} />
      </IconButton>
      <Stack justifyContent={'center'}>
        <Typography variant={'h6'}>{title}</Typography>
        <Typography variant={'h5'} fontWeight={700}>
          {user.profile.name}
        </Typography>
      </Stack>
    </Flex>
  );
};
