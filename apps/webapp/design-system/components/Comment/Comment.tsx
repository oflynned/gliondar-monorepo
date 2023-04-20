import { FunctionComponent } from 'react';
import { Avatar } from '../Avatar';
import { Box, styled, Typography } from '@mui/material';
import { Stack } from '../Stack';
import { Person } from '../../../mock-data/types';

type Props = { poster: Person; postedAt: string; comment: string };

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
      <Avatar imageUrl={poster.avatarUrl} label={poster.name} />
      <Stack>
        <Typography variant={'h5'}>{poster.name}</Typography>
        <Typography>{postedAt}</Typography>
        <Typography>{comment}</Typography>
      </Stack>
    </Container>
  );
};
