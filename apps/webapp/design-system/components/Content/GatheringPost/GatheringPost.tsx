import { FunctionComponent } from 'react';
import { GatheringPost as Post } from '../../../../mock-data';
import { Avatar, Card, Flex, GradientOverlay, Stack } from '../../../atoms';
import { Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/router';

type Props = {
  post: Post;
};

export const GatheringPost: FunctionComponent<Props> = ({ post }) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <Card canHover onClick={() => router.push(`/events/${post.id}`)}>
      <Stack padding={2} gap={1} width={'100%'}>
        <Flex gap={1}>
          <Avatar imageUrl={post.poster.avatarUrl} label={post.poster.name} />
          <Stack justifyContent={'center'}>
            <Flex gap={1} alignItems={'center'}>
              <Typography variant={'h5'}>{post.poster.name}</Typography>
            </Flex>
            <Typography>{post.postedAt.toLocaleDateString()}</Typography>
          </Stack>
        </Flex>
        <GradientOverlay
          imageUrl={post.gathering.imageUrl}
          borderRadius={theme.spacing(2)}
        >
          <Stack height={192} justifyContent={'end'} padding={2}>
            <Typography color={'white'} variant={'h3'}>
              {post.gathering.title}
            </Typography>
            <Typography color={'white'}>
              {post.gathering.startsAt.toLocaleDateString()}
            </Typography>
          </Stack>
        </GradientOverlay>
      </Stack>
    </Card>
  );
};
