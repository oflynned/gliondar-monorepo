import { FunctionComponent, PropsWithChildren, useState } from 'react';
import { Avatar, Card, Flex } from '../../../../atoms';
import {
  Box,
  CardActionArea,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { UserGeneratedContent } from '@gliondar/shared/types';
import {
  ArrowDownwardRounded,
  ArrowUpwardRounded,
  ChatBubbleOutlineOutlined,
  MoreVertOutlined,
} from '@mui/icons-material';
import { formatTimeElapsed } from '@gliondar/fe/design-system';

enum ScoreDirection {
  UPVOTE,
  DOWNVOTE,
}

type Props = {
  onClick?: () => void;
  post: UserGeneratedContent;
};

export const BasePost: FunctionComponent<PropsWithChildren<Props>> = ({
  post,
  children,
  onClick,
}) => {
  const router = useRouter();
  const [score, setScore] = useState(post.score);
  const [scored, setScored] = useState<ScoreDirection | null>(null);

  if (!post.postedBy) {
    return null;
  }

  return (
    <Card>
      <CardActionArea
        onClick={(event) => {
          event.stopPropagation();
          onClick?.();
        }}
      >
        <Stack padding={2} gap={1} width={'100%'}>
          <Stack
            width={'100%'}
            direction={'row'}
            justifyContent={'space-between'}
          >
            {/* TODO why is id nullish? */}
            <Stack gap={1} direction={'row'}>
              <IconButton
                onClick={() => router.push(`/users/${post.postedBy?.id}`)}
              >
                <Avatar user={post.postedBy} />
              </IconButton>
              <Stack justifyContent={'center'}>
                <Flex gap={1} alignItems={'center'}>
                  <Typography variant={'h5'}>
                    {post.postedBy.profile.name}
                  </Typography>
                </Flex>
                {/*<Typography>{post.postedAt.toLocaleDateString()}</Typography>*/}
                <Typography>{formatTimeElapsed(post.createdAt)}</Typography>
              </Stack>
            </Stack>
            <Box>
              <IconButton color={'inherit'}>
                <MoreVertOutlined />
              </IconButton>
            </Box>
          </Stack>
          {children}
          <Flex marginTop={1} gap={2} justifyContent={'space-between'}>
            <Flex alignItems={'center'}>
              <IconButton
                color={
                  scored === ScoreDirection.DOWNVOTE ? 'primary' : 'inherit'
                }
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
                  <ArrowDownwardRounded />
                ) : (
                  <ArrowDownwardRounded />
                )}
              </IconButton>
              <Typography>{score}</Typography>
              <IconButton
                color={scored === ScoreDirection.UPVOTE ? 'primary' : 'inherit'}
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
              <IconButton color={'inherit'}>
                <ChatBubbleOutlineOutlined />
              </IconButton>
              {/*  <IconButton color={'inherit'}>*/}
              {/*    <ShareOutlined />*/}
              {/*  </IconButton>*/}
            </Flex>
          </Flex>
        </Stack>
      </CardActionArea>
    </Card>
  );
};
