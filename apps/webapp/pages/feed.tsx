import {
  Flex,
  GatheringPost,
  Map,
  Stack,
  TextPost,
  TitledLayout,
} from '@gliondar/fe/design-system';
import { useTheme } from '@mui/material';
import { useQuery } from '@apollo/client';
import { UserGeneratedContent } from '@gliondar/shared/types';
import { GET_FEED } from '@gliondar/fe/graphql';

const Feed = () => {
  const theme = useTheme();
  const { data, loading, error } = useQuery<{
    getFeed: UserGeneratedContent[];
  }>(GET_FEED, {
    variables: { page: 0 },
  });

  if (loading) {
    return 'Loading';
  }

  if (error) {
    return 'Error';
  }

  return (
    <>
      <TitledLayout gap={4} flex={1}>
        <Stack gap={2} maxWidth={768}>
          {data.getFeed.map((post) => {
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

      {/*<Flex*/}
      {/*  height={'100vh'}*/}
      {/*  flex={1}*/}
      {/*  top={0}*/}
      {/*  position={'sticky'}*/}
      {/*  borderLeft={`1px solid ${theme.palette.divider}`}*/}
      {/*>*/}
      {/*  <Map />*/}
      {/*</Flex>*/}
    </>
  );
};

export default Feed;
