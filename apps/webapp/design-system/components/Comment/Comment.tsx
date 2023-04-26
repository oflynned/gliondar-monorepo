import { FunctionComponent } from 'react';
import { Stack, Avatar } from '../../atoms';
import { Box, styled, Typography } from '@mui/material';
import { User } from '@gliondar/shared/types';

type Props = { poster: User; postedAt: Date; comment: string };

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

export const Comment: FunctionComponent<Props> = ({
  poster,
  postedAt,
  comment,
}) => {
  return (
    <Container>
      <Avatar imageUrl={poster.avatar.url} label={poster.profile.name} />
      <Stack>
        <Typography variant={'h5'}>{poster.profile.name}</Typography>
        <Typography>{postedAt.toISOString()}</Typography>
        <Typography>{comment}</Typography>
      </Stack>
    </Container>
  );
};
