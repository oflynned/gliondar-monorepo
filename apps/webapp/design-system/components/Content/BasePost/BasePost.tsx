import { FunctionComponent, PropsWithChildren, useState } from 'react';
import { Avatar, Card, Flex, Stack } from '../../../atoms';
import { IconButton, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { UserGeneratedContent } from '@gliondar/shared/types';
import {
  ArrowDownwardRounded,
  ArrowUpwardRounded,
  ChatBubbleOutlineOutlined,
  MoreVertOutlined,
  ShareOutlined,
} from '@mui/icons-material';
import { faker } from '@faker-js/faker';

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
  const [minsSincePosting] = useState(
    faker.datatype.number({
      min: 1,
      max: 30,
    })
  );

  return (
    <Card canHover>
      <Stack padding={2} gap={1} width={'100%'}>
        <Flex gap={1}>
          <IconButton onClick={() => router.push(`/users/${post.poster.id}`)}>
            <Avatar
              imageUrl={post.poster.avatar.url}
              label={post.poster.profile.name}
            />
          </IconButton>
          <Stack justifyContent={'center'}>
            <Flex gap={1} alignItems={'center'}>
              <Typography variant={'h5'}>{post.poster.profile.name}</Typography>
            </Flex>
            {/*<Typography>{post.postedAt.toLocaleDateString()}</Typography>*/}
            <Typography>{`${minsSincePosting} mins ago`}</Typography>
          </Stack>
        </Flex>
        {children}
        <Flex marginTop={1} gap={2} justifyContent={'space-between'}>
          <Flex alignItems={'center'}>
            <IconButton
              color={scored === ScoreDirection.DOWNVOTE ? 'primary' : 'inherit'}
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
            <IconButton color={'inherit'}>
              <ShareOutlined />
            </IconButton>
            <IconButton color={'inherit'}>
              <MoreVertOutlined />
            </IconButton>
          </Flex>
        </Flex>
      </Stack>
    </Card>
  );
};
