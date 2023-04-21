import {
  Button,
  Card,
  EventCard,
  Flex,
  NavBarPage,
  SideBarLayout,
  Stack,
  TitledLayout,
} from '../../design-system';
import { Box, Chip, styled, Typography } from '@mui/material';
import { mockEventDiscovery } from '../../mock-data/mock-gatherings';
import { useRouter } from 'next/router';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useCallback, useState } from 'react';
import { getRandomInterests } from '../../mock-data/mock-interests';

type Map = google.maps.Map;
type CoordinateSet = { lat: number; lng: number };

const defaultCoordinates: CoordinateSet = { lat: 53.343337, lng: -6.260073 };

const Index = () => {
  const router = useRouter();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [map, setMap] = useState<Map | null>(null);

  const onLoad = useCallback((map: Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return (
    <SideBarLayout activePage={NavBarPage.EVENTS}>
      <TitledLayout pageTitle={'Events'} gap={4} flex={2}>
        <Flex>
          <Flex flex={1} gap={4}>
            <Stack gap={2} maxWidth={330}>
              <Card>
                <Box
                  height={256}
                  width={384}
                  display={'flex'}
                  justifyContent={'center'}
                  alignItems={'center'}
                >
                  <Typography variant={'h6'}>Calendar</Typography>
                </Box>
              </Card>
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

              {mockEventDiscovery.map(({ timeframe, gatherings }) => (
                <Stack gap={2}>
                  <Typography variant={'h4'}>{timeframe}</Typography>
                  {gatherings.map((gathering) => (
                    <EventCard
                      gathering={gathering}
                      onClick={(gathering) =>
                        router.push(`/events/${gathering.id}`)
                      }
                    />
                  ))}
                </Stack>
              ))}
            </Stack>
          </Flex>
        </Flex>
      </TitledLayout>

      <Flex height={'100vh'} flex={1} top={0} position={'sticky'}>
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }}
            center={defaultCoordinates}
            zoom={14}
            onLoad={onLoad}
            onUnmount={onUnmount}
          />
        ) : null}
      </Flex>
    </SideBarLayout>
  );
};

export default Index;
