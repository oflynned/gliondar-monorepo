import {
  Comment,
  NavBarPage,
  SideBarLayout,
  Stack,
  TextPost,
  TitledLayout,
} from '../design-system';
import { getRandomPosts } from '../mock-data/mock-feed';

const Feed = () => {
  const posts = getRandomPosts(10);

  return (
    <SideBarLayout activePage={NavBarPage.FEED}>
      <TitledLayout pageTitle={'Feed'} gap={4} flex={2}>
        <Stack gap={2} maxWidth={512}>
          {posts.map((post) => (
            <TextPost post={post} />
          ))}
        </Stack>
      </TitledLayout>
    </SideBarLayout>
  );
};

export default Feed;
