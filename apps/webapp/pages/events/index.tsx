import {
  Card,
  Flex,
  NavBarPage,
  SideBarLayout,
  Stack,
} from '../../design-system';
import { Box, IconButton, styled, Typography, useTheme } from '@mui/material';
import { mockEvents } from '../../mock-data/mock-events';
import { useRouter } from 'next/router';
import { BookmarkAddOutlined } from '@mui/icons-material';
import Image from 'next/image';

const Container = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

const EventImage = styled(Box)<{ imageUrl: string }>(({ imageUrl }) => ({
  backgroundImage: `url(${imageUrl})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
}));

const CardActionContainer = styled(Box)({
  display: 'flex',
  alignItems: 'flex-end',
});

const EventCard = styled(Card)({
  ':hover': {
    pointer: 'cursor',
  },
});

const Index = () => {
  const theme = useTheme();
  const router = useRouter();

  return (
    <SideBarLayout activePage={NavBarPage.EVENTS}>
      <Box sx={{ padding: theme.spacing(3), maxWidth: '768px' }}>
        <Typography variant={'h2'}>Events</Typography>
        <Stack>
          {Object.values(mockEvents).map((gathering) => (
            <EventCard onClick={() => router.push(`/events/${gathering.id}`)}>
              <Container>
                <Flex>
                  <img src={gathering.imageUrl} height={128} />
                  <Stack>
                    <Typography variant={'h4'}>{gathering.title}</Typography>
                    <Typography>{gathering.startsAt}</Typography>
                    <Typography>{`${gathering.attendees.length} attending`}</Typography>
                  </Stack>
                </Flex>
                <CardActionContainer>
                  <IconButton>
                    <BookmarkAddOutlined />
                  </IconButton>
                </CardActionContainer>
              </Container>
            </EventCard>
          ))}
        </Stack>
      </Box>
    </SideBarLayout>
  );
};

export default Index;
