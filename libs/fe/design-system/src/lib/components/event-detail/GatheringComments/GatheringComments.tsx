import { FunctionComponent } from 'react';
import { Gathering } from '@gliondar/shared/types';
import { Stack, Typography } from '@mui/material';
import { Card, Comment } from '@gliondar/fe/design-system';

type Props = Pick<Gathering, 'comments'>;

export const GatheringComments: FunctionComponent<Props> = ({
  comments = [],
}) => {
  return (
    <Card>
      <Stack gap={2} padding={2}>
        {!comments?.length ? (
          <Typography>Be the first to comment</Typography>
        ) : (
          comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))
        )}
      </Stack>
    </Card>
  );
};
