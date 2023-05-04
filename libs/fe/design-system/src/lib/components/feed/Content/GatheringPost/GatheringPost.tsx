import { FunctionComponent } from 'react';
import { GatheringPost as Post } from '@gliondar/shared/types';
import { GradientOverlay, Stack } from '../../../../atoms';
import { Typography, useTheme } from '@gliondar/fe/mui';
import { useRouter } from 'next/router';
import { BasePost } from '../BasePost';
import { formatTimestampToDateWithDay } from '../../../../formatters';

type Props = {
  post: Post;
};

export const GatheringPost: FunctionComponent<Props> = ({ post }) => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <BasePost post={post}>
      <GradientOverlay
        height={192}
        imageUrl={post.gathering?.image?.url}
        borderRadius={1}
        onClick={() => router.push(`/events/${post.id}`)}
        hoverZoomEffect
      >
        <Stack height={192} justifyContent={'end'} padding={2}>
          <Typography color={theme.palette.common.white} variant={'h4'}>
            {post.gathering?.title}
          </Typography>
          <Typography color={theme.palette.common.white}>
            {formatTimestampToDateWithDay(post.gathering?.startsAt)}
          </Typography>
        </Stack>
      </GradientOverlay>
    </BasePost>
  );
};
