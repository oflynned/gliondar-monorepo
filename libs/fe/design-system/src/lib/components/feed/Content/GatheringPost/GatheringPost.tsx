import { FunctionComponent } from 'react';
import { GatheringPost as Post } from '@gliondar/shared/types';
import { GradientOverlay, Stack } from '../../../../atoms';
import { Typography, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import { BasePost } from '../BasePost';
import { formatTimestampToDateWithDay } from '../../../../formatters';

type Props = {
  post: Post;
};

export const GatheringPost: FunctionComponent<Props> = ({ post }) => {
  const theme = useTheme();
  const router = useRouter();

  const imageUrl = post.gathering?.image?.url;

  if (!imageUrl) {
    return null;
  }

  return (
    <BasePost post={post} onClick={() => router.push(`/events/${post.id}`)}>
      <GradientOverlay
        height={192}
        imageUrl={imageUrl}
        borderRadius={1}
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
