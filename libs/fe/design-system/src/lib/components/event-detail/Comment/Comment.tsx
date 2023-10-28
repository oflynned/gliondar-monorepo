import { FunctionComponent } from 'react';
import { Stack, Avatar } from '../../../atoms';
import { Box, styled, Typography } from '@mui/material';
import { Comment as CommentType } from '@gliondar/shared/types';
import { formatTimestampToDateTime } from '../../../formatters';

type Props = { comment?: CommentType | null };

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
}));

export const Comment: FunctionComponent<Props> = ({ comment }) => {
  if (!comment) {
    return null;
  }

  const poster = comment.postedBy;

  // TODO handle blocked users, toxic content, users without an avatar
  if (!poster) {
    return null;
  }

  return (
    <Container>
      <Avatar user={poster} />
      <Stack>
        <Typography variant={'h5'}>{poster?.profile?.name}</Typography>
        <Typography>{formatTimestampToDateTime(comment.createdAt)}</Typography>
        <Typography>{comment.text}</Typography>
      </Stack>
    </Container>
  );
};
