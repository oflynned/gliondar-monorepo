import { FunctionComponent, useState } from 'react';
import { TextPost as Post } from '../../../../mock-data';
import { Avatar, Card, Flex, Stack } from '../../../atoms';
import { Box, IconButton, Typography, useTheme } from '@mui/material';
import { ArrowDownwardRounded, ArrowUpwardRounded } from '@mui/icons-material';
import { useRouter } from 'next/router';

type Props = {
  post: Post;
};

enum ScoreDirection {
  UPVOTE,
  DOWNVOTE,
}

export const TextPost: FunctionComponent<Props> = ({ post }) => {
  const router = useRouter();
  const [score, setScore] = useState(post.score);
  const [scored, setScored] = useState<ScoreDirection | null>(null);

  return (
    <Card canHover>
      <Stack padding={2} gap={1}>
        <Flex gap={1}>
          <IconButton onClick={() => router.push(`/users/${post.poster.id}`)}>
            <Avatar imageUrl={post.poster.avatarUrl} label={post.poster.name} />
          </IconButton>
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
          <IconButton
            onClick={() => {
              if (scored === ScoreDirection.UPVOTE) {
                setScored(null);
                setScore(post.score);
              } else {
                setScored(ScoreDirection.UPVOTE);
                setScore(post.score + 1);
              }
            }}
          >
            {scored === ScoreDirection.UPVOTE ? (
              <ArrowUpwardRounded color={'primary'} />
            ) : (
              <ArrowUpwardRounded />
            )}
          </IconButton>
          <Typography>{score}</Typography>
          <IconButton
            onClick={() => {
              if (scored === ScoreDirection.DOWNVOTE) {
                setScored(null);
                setScore(post.score);
              } else {
                setScored(ScoreDirection.DOWNVOTE);
                setScore(post.score - 1);
              }
            }}
          >
            {scored === ScoreDirection.DOWNVOTE ? (
              <ArrowDownwardRounded color={'primary'} />
            ) : (
              <ArrowDownwardRounded />
            )}
          </IconButton>
        </Stack>
      </Flex>
    </Card>
  );
};
