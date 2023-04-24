import {
  Flex,
  GatheringPost,
  Map,
  Stack,
  TextPost,
  TitledLayout,
} from '../design-system';
import { getRandomPosts } from '../mock-data/mock-feed';
import { useState } from 'react';
import { useTheme } from '@mui/material';

const content = getRandomPosts(10);

const Feed = () => {
  const [posts] = useState(content);
  const theme = useTheme();

  return (
    <>
      <TitledLayout pageTitle={'Feed'} gap={4} flex={1}>
        <Stack gap={2} maxWidth={768}>
          {posts.map((post) => {
            if (post.__typename === 'TextPost') {
              return <TextPost post={post} key={post.id} />;
            }

            if (post.__typename === 'GatheringPost') {
              return <GatheringPost post={post} key={post.id} />;
            }

            return null;
          })}
        </Stack>
      </TitledLayout>

      <Flex
        height={'100vh'}
        flex={1}
        top={0}
        position={'sticky'}
        borderLeft={`1px solid ${theme.palette.divider}`}
      >
        <Map />
      </Flex>
    </>
  );
};

export default Feed;
