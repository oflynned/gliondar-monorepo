import {
  Card,
  Flex,
  GatheringAttendees,
  Hero,
  Map,
  BottomActionBar,
  GatheringComments,
  GatheringDescription,
  GatheringQuickOverview,
  GatheringSafety,
  TopActionBar,
  ShareModal,
} from '@gliondar/fe/design-system';
import { styled, Typography, Stack } from '@gliondar/fe/mui';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Gathering } from '@gliondar/shared/types';
import { GET_GATHERING_BY_ID } from '@gliondar/fe/graphql';
import { useState } from 'react';

const DetailsSection = styled(Flex)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: theme.spacing(3),
  gap: theme.spacing(3),
}));

const EventDetail = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const { data, loading, error } = useQuery<{
    getGatheringById?: Gathering | null;
  }>(GET_GATHERING_BY_ID, {
    variables: { id: eventId },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  if (loading) {
    return <Typography>Loading</Typography>;
  }

  if (error) {
    return <Typography>Error</Typography>;
  }

  const gathering = data?.getGatheringById;

  if (!gathering) {
    return null;
  }

  return (
    <>
      <ShareModal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        gathering={gathering}
      />
      <Stack width={'100%'} display={'flex'}>
        <Hero
          title={gathering.title}
          imageUrl={gathering.image.url}
          onBackPress={() => router.back()}
        />
        <TopActionBar createdBy={gathering.createdBy} />

        <DetailsSection>
          <Flex justifyContent={'space-between'}>
            <Stack gap={2} maxWidth={768}>
              <Typography variant={'h4'}>Details</Typography>
              <GatheringDescription description={gathering.description} />

              <Typography variant={'h4'}>Attendees</Typography>
              <GatheringAttendees attendees={gathering.attendees} />

              <Typography variant={'h4'}>{'Comments'}</Typography>
              <GatheringComments comments={gathering.comments} />
            </Stack>
            <Flex justifyContent={'end'} maxWidth={384}>
              <Stack gap={2}>
                <GatheringQuickOverview
                  address={gathering.address}
                  recurrence={gathering.recurrence}
                  startsAt={gathering.startsAt}
                />
                <Card height={256}>
                  <Flex
                    sx={{ cursor: 'pointer' }}
                    // TODO get the maps link to open when clicking on the card, or allow it to be expanded
                    onClick={() => window.open('https://google.com/maps')}
                    borderRadius={1}
                    justifyContent={'center'}
                    alignItems={'center'}
                    width={'100%'}
                  >
                    <Map coordinates={gathering.coordinates} />
                  </Flex>
                </Card>
                <GatheringSafety />
              </Stack>
            </Flex>
          </Flex>
        </DetailsSection>

        <BottomActionBar
          gathering={gathering}
          onShare={() => {
            setIsModalOpen(true);
          }}
        />
      </Stack>
    </>
  );
};

export default EventDetail;
