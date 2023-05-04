import { FunctionComponent } from 'react';
import { Stack, Avatar } from '../../../atoms';
import { Box, styled, Typography } from '@gliondar/fe/mui';
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

  // TODO handle blocked users, toxic content, users without an avatar
  if (!comment.postedBy) {
    return (
      <Container>
        <Stack>
          <Typography variant={'h5'}>{'Deleted user'}</Typography>
          <Typography>
            {formatTimestampToDateTime(comment.createdAt)}
          </Typography>
          <Typography>{comment.text}</Typography>
        </Stack>
      </Container>
    );
  }

  return (
    <Container>
      <Avatar
        imageUrl={comment.postedBy?.avatar?.url}
        label={comment.postedBy?.profile?.name}
      />
      <Stack>
        <Typography variant={'h5'}>
          {comment.postedBy?.profile?.name}
        </Typography>
        <Typography>{formatTimestampToDateTime(comment.createdAt)}</Typography>
        <Typography>{comment.text}</Typography>
      </Stack>
    </Container>
  );
};
