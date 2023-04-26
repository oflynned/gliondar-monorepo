import {
  Button,
  Card,
  EventCard,
  Flex,
  Stack,
  TitledLayout,
  Map,
} from '../../design-system';
import { Box, Chip, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { getRandomInterests } from '../../mock-data/mock-interests';
import { getRandomGatherings } from '../../mock-data/mock-gatherings';

const Index = () => {
  const router = useRouter();

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
            <Stack gap={2} flex={1} maxWidth={768}>
              <Flex gap={1}>
                <Button label={'This week'} variant={'outlined'} />
                <Button label={'This weekend'} variant={'outlined'} />
                <Button label={'Next week'} variant={'outlined'} />
              </Flex>

              <Stack gap={2}>
                <Stack gap={2}>
                  <Typography variant={'h4'}>Today</Typography>
                  {getRandomGatherings(3).map((gathering) => (
                    <EventCard
                      key={gathering.id}
                      gathering={gathering}
                      onClick={(gathering) =>
                        router.push(`/events/${gathering.id}`)
                      }
                    />
                  ))}
                </Stack>
                <Stack gap={2}>
                  <Typography variant={'h4'}>Tomorrow</Typography>
                  {getRandomGatherings(3).map((gathering) => (
                    <EventCard
                      key={gathering.id}
                      gathering={gathering}
                      onClick={(gathering) =>
                        router.push(`/events/${gathering.id}`)
                      }
                    />
                  ))}
                </Stack>
                <Stack gap={2}>
                  <Typography variant={'h4'}>Later</Typography>
                  {getRandomGatherings(7).map((gathering) => (
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

      <Flex height={'100vh'} flex={1} top={0} position={'sticky'}>
        <Map />
      </Flex>
    </>
  );
};

export default Index;
