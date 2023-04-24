import { FunctionComponent } from 'react';
import { TextPost as TextPostContent } from '../../../../mock-data';
import { Box, Typography } from '@mui/material';
import { BasePost } from '../BasePost';

type Props = {
  post: TextPostContent;
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
