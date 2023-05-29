import { FunctionComponent } from 'react';
import { styled } from '@gliondar/fe/mui';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import { User } from '@gliondar/shared/types';

const RoundedAvatar = styled(Image)(({ theme }) => ({
  borderRadius: '50%',
  border: `1px solid ${theme.palette.divider}`,
}));

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  width: AvatarSize.MEDIUM,
  height: AvatarSize.MEDIUM,
  borderRadius: '50%',
  background: theme.palette.primary.light,
  justifyContent: 'center',
  alignItems: 'center',
  border: `1px solid ${theme.palette.divider}`,
}));

export enum AvatarSize {
  SMALL = 32,
  MEDIUM = 48,
  LARGE = 64,
}

type Props = {
  user: User;
  size?: AvatarSize;
};

export const Avatar: FunctionComponent<Props> = ({
  user,
  size = AvatarSize.MEDIUM,
}) => {
  if (user.avatar) {
    return (
      <RoundedAvatar
        width={size}
        height={size}
        src={user.avatar.url}
        alt={user.profile.name}
        // placeholder={'blur'}
        unoptimized
      />
    );
  }

  return (
    <Container>
      <Typography fontWeight={700} color={'white'}>
        {user?.profile?.initials ?? 'ME'}
      </Typography>
    </Container>
  );
};
