import { FunctionComponent } from 'react';
import { Stack, Avatar } from '../../atoms';
import { Box, styled, Typography } from '@mui/material';
import { Person } from '../../../mock-data';

type Props = { poster: Person; postedAt: Date; comment: string };

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
        <Typography>{postedAt.toISOString()}</Typography>
        <Typography>{comment}</Typography>
      </Stack>
    </Container>
  );
};
