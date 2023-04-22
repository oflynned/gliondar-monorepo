import { FunctionComponent } from 'react';
import { GatheringPost as Post } from '../../../../mock-data';
import { Avatar, Card, Flex, GradientOverlay, Stack } from '../../../atoms';
import { IconButton, Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/router';

type Props = {
  post: Post;
};

export const GatheringPost: FunctionComponent<Props> = ({ post }) => {
  const theme = useTheme();
  const router = useRouter();

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
        <GradientOverlay
          imageUrl={post.gathering.imageUrl}
          borderRadius={theme.spacing(2)}
          onClick={() => router.push(`/events/${post.id}`)}
        >
          <Stack height={192} justifyContent={'end'} padding={2}>
            <Typography color={'white'} variant={'h4'}>
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
