import {
  Flex,
  Layout,
  NavBarPage,
  SideBarLayout,
  Stack,
} from '../../design-system';
import { Box, styled, Typography, useTheme } from '@mui/material';
import { mockEventDiscovery } from '../../mock-data/mock-events';
import { useRouter } from 'next/router';
import { EventCard } from '../../design-system/components/EventCard';

const StyledEventListContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

const StyledEventTimeframeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: theme.spacing(4),
}));

const Index = () => {
  const router = useRouter();

  return (
    <SideBarLayout activePage={NavBarPage.EVENTS}>
      <Layout>
        <Typography variant={'h2'}>Events</Typography>
        <Flex>
          <Box sx={{ flex: 1 }}>content</Box>
          <StyledEventListContainer>
            <Stack>
              {mockEventDiscovery.map(({ timeframe, gatherings }) => (
                <StyledEventTimeframeContainer>
                  <Typography variant={'h4'}>{timeframe}</Typography>
                  {gatherings.map((gathering) => (
                    <EventCard
                      gathering={gathering}
                      onClick={(gathering) =>
                        router.push(`/events/${gathering.id}`)
                      }
                    />
                  ))}
                </StyledEventTimeframeContainer>
              ))}
            </Stack>
          </StyledEventListContainer>
        </Flex>
      </Layout>
    </SideBarLayout>
  );
};

export default Index;
