import { FunctionComponent } from 'react';
import { TextPost as Post } from '@gliondar/shared/types';
import { Box, Typography } from '@gliondar/fe/mui';
import { BasePost } from '../BasePost';

type Props = {
  post: Post;
};

export const TextPost: FunctionComponent<Props> = ({ post }) => {
  return (
    <BasePost post={post}>
      <Box>
        <Typography>{post.text}</Typography>
      </Box>
    </BasePost>
  );
};
