import {
  GatheringPost,
  NavBarPage,
  SideBarLayout,
  Stack,
  TextPost,
  TitledLayout,
} from '../design-system';
import { getRandomPosts } from '../mock-data/mock-feed';
import { useState } from 'react';

const content = getRandomPosts(10);

const Feed = () => {
  const [posts] = useState(content);

  return (
    <SideBarLayout activePage={NavBarPage.FEED}>
      <TitledLayout pageTitle={'Feed'} gap={4} flex={2}>
        <Stack gap={2} maxWidth={512}>
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
    </SideBarLayout>
  );
};

export default Feed;
