import {
  Button,
  Card,
  EventCard,
  Flex,
  Stack,
  TitledLayout,
} from '@gliondar/fe/design-system';
import { Box, Chip, Typography } from '@gliondar/fe/mui';
import { useRouter } from 'next/router';
import {
  getRandomInterests,
  getRandomGatherings,
} from '@gliondar/be/mock-data';
import { useQuery } from '@apollo/client';
import { GET_RELEVANT_GATHERINGS } from '../../../../libs/fe/graphql/src/lib/queries/get-relevant-gatherings';
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
              <Card>
                <Stack
                  justifyContent={'space-between'}
                  width={'100%'}
                  padding={2}
                  gap={1}
                >
                  <Typography variant={'h4'}>Your events</Typography>
                  <Typography>You have not created any events yet.</Typography>
                  <Box alignSelf={'flex-end'} marginTop={2}>
                    <Button
                      label={'New event'}
                      color={'primary'}
                      variant={'outlined'}
                    />
                  </Box>
                </Stack>
              </Card>
              <Card>
                <Stack justifyContent={'space-between'} padding={2}>
                  <Typography variant={'h4'}>Your interests</Typography>
                  <Flex marginTop={2} gap={1} flexWrap={'wrap'}>
                    {getRandomInterests(25).map((interest) => (
                      <Chip
                        key={interest.id}
                        clickable
                        label={<Typography>{interest.title}</Typography>}
                      />
                    ))}
                  </Flex>
                </Stack>
              </Card>
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
