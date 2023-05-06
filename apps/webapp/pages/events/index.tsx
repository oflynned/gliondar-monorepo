import {
  Button,
  Card,
  EventCard,
  Flex,
  InterestOverview,
  NewEventPrompt,
  Stack,
  TitledLayout,
} from '@gliondar/fe/design-system';
import { Box, Chip, Typography } from '@gliondar/fe/mui';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { GET_RELEVANT_GATHERINGS } from '@gliondar/fe/graphql';
import { Gathering } from '@gliondar/shared/types';

const Index = () => {
  const router = useRouter();
  const { data, loading, error } = useQuery<{ getGatherings: Gathering[] }>(
    GET_RELEVANT_GATHERINGS,
    {
      variables: { page: 0 },
    }
  );

  if (loading) {
    return <Typography>Loading</Typography>;
  }

  if (error) {
    return <Typography>Error</Typography>;
  }

  const gatherings = data?.getGatherings;

  return (
    <>
      <TitledLayout pageTitle={'Events'} gap={4} flex={2}>
        <Flex>
          <Flex flex={1} gap={3}>
            <Stack gap={2} maxWidth={330}>
              <NewEventPrompt />
              <InterestOverview interests={[]} />
            </Stack>
            <Stack gap={4} flex={1} maxWidth={768}>
              <Flex gap={1}>
                <Button label={'This week'} variant={'outlined'} />
                <Button label={'This weekend'} variant={'outlined'} />
                <Button label={'Next week'} variant={'outlined'} />
              </Flex>

              <Stack gap={2}>
                <Stack gap={2}>
                  <Typography variant={'h4'}>Upcoming</Typography>
                  {gatherings.map((gathering) => (
                    <EventCard
                      key={gathering.id}
                      gathering={gathering}
                      onClick={(gathering) =>
                        router.push(`/events/${gathering.id}`)
                      }
                    />
                  ))}
                </Stack>
              </Stack>
            </Stack>
          </Flex>
        </Flex>
      </TitledLayout>
    </>
  );
};

export default Index;
