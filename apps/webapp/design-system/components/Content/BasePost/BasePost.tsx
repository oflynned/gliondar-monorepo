import { FunctionComponent, PropsWithChildren, useState } from 'react';
import { Avatar, Card, Flex, Stack } from '../../../atoms';
import { IconButton, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { UserGeneratedContent } from '../../../../mock-data';
import {
  ArrowDownwardRounded,
  ArrowUpwardRounded,
  MenuOutlined,
  MoreVertOutlined,
  ShareOutlined,
} from '@mui/icons-material';

enum ScoreDirection {
  UPVOTE,
  DOWNVOTE,
}

type Props = {
  post: UserGeneratedContent;
};

export const BasePost: FunctionComponent<PropsWithChildren<Props>> = ({
  post,
  children,
}) => {
  const router = useRouter();
  const [score, setScore] = useState(post.score);
  const [scored, setScored] = useState<ScoreDirection | null>(null);

  return (
    <Card canHover>
      <Stack padding={2} gap={1} width={'100%'}>
        <Flex gap={1}>
          <IconButton onClick={() => router.push(`/users/${post.poster.id}`)}>
            <Avatar imageUrl={post.poster.avatarUrl} label={post.poster.name} />
          </IconButton>
          <Stack justifyContent={'center'}>
            <Flex gap={1} alignItems={'center'}>
              <Typography variant={'h5'}>{post.poster.name}</Typography>
            </Flex>
            <Typography>{post.postedAt.toLocaleDateString()}</Typography>
          </Stack>
        </Flex>
        {children}
        <Flex gap={2} justifyContent={'space-between'}>
          <Flex alignItems={'center'}>
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
            <Typography>{score}</Typography>
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
          </Flex>
          <Flex>
            <IconButton>
              <ShareOutlined color={'inherit'} />
            </IconButton>
            <IconButton>
              <MoreVertOutlined color={'inherit'} />
            </IconButton>
          </Flex>
        </Flex>
      </Stack>
    </Card>
  );
};
