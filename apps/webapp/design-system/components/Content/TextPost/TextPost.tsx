import { FunctionComponent, useState } from 'react';
import { TextPost as Post } from '../../../../mock-data';
import { Avatar, Card, Flex, Stack } from '../../../atoms';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowDownwardRounded, ArrowUpwardRounded } from '@mui/icons-material';

type Props = {
  post: Post;
};

export const TextPost: FunctionComponent<Props> = ({ post }) => {
  const [score, setScore] = useState(post.score);

  return (
    <Card>
      <Stack padding={2} gap={1}>
        <Flex gap={1}>
          <Avatar imageUrl={post.poster.avatarUrl} label={post.poster.name} />
          <Stack justifyContent={'center'}>
            <Flex gap={1} alignItems={'center'}>
              <Typography variant={'h5'}>{post.poster.name}</Typography>
            </Flex>
            <Typography>{post.postedAt.toISOString()}</Typography>
          </Stack>
        </Flex>
        <Box>
          <Typography>{post.text}</Typography>
        </Box>
      </Stack>
      <Flex alignItems={'center'}>
        <Stack alignItems={'center'}>
          <IconButton onClick={() => setScore(post.score + 1)}>
            <ArrowUpwardRounded />
          </IconButton>
          <Typography>{score}</Typography>
          <IconButton onClick={() => setScore(post.score - 1)}>
            <ArrowDownwardRounded />
          </IconButton>
        </Stack>
      </Flex>
    </Card>
  );
};
