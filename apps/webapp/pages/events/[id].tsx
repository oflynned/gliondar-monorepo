import {
  Avatar,
  Button,
  Card,
  Comment,
  DescribedAvatar,
  Flex,
  Hero,
  NavBarPage,
  SideBarLayout,
  Stack,
  StickyBottomContainer,
} from '../../design-system';
import { Box, IconButton, styled, Typography, useTheme } from '@mui/material';
import { BookmarkAddOutlined, LocationOnOutlined } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { mockEvents } from '../../mock-data/mock-events';

const StyledOutlineContainer = styled(Box)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.default,
  padding: theme.spacing(3),
}));

const DetailsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  gap: theme.spacing(3),
  maxWidth: '768px',
}));

const EventDetail = () => {
  const theme = useTheme();
  const router = useRouter();
  const { id } = router.query;

  const gathering = mockEvents[id as string];

  if (!gathering) {
    return null;
  }

  return (
    <SideBarLayout activePage={NavBarPage.EVENTS}>
      <Stack>
        <Hero title={gathering.title} imageUrl={gathering.imageUrl} />
        <StyledOutlineContainer>
          <DescribedAvatar
            title={'Hosted by'}
            subtitle={gathering.organiser.name}
            imageUrl={gathering.organiser.avatarUrl}
          />
        </StyledOutlineContainer>

        <DetailsSection>
          <Stack>
            <Typography variant={'h4'}>Details</Typography>
            <Card>
              <Stack>
                {gathering.description.map((paragraph) => (
                  <Typography variant={'body1'}>{paragraph}</Typography>
                ))}
              </Stack>
            </Card>
          </Stack>

          <Stack>
            <Typography variant={'h4'}>Attendees</Typography>
            <Card>
              <Flex gap={theme.spacing(1)}>
                {gathering.attendees.map((attendee) => (
                  <Avatar imageUrl={attendee.avatarUrl} label={attendee.name} />
                ))}
              </Flex>
            </Card>
          </Stack>

          <Stack>
            <Typography
              variant={'h4'}
            >{`Comments (${gathering.attendees.length})`}</Typography>
            <Card>
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
              >
                {gathering.attendees.map((person) => (
                  <Comment
                    poster={person}
                    postedAt={gathering.startsAt}
                    comment={'Responded with attending'}
                  />
                ))}
              </Box>
            </Card>
          </Stack>
        </DetailsSection>

        <StickyBottomContainer>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
              <IconButton color={'inherit'}>
                <LocationOnOutlined />
              </IconButton>
              <Box>
                <Typography>{gathering.startsAt}</Typography>
                <Typography variant={'h5'}>{gathering.address}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', gap: theme.spacing(2) }}>
              <IconButton sx={{ width: 'fit-content' }} color={'inherit'}>
                <BookmarkAddOutlined />
              </IconButton>
              <Button label={'Attend'} colour={'primary'} />
              <Button label={'Share'} colour={'secondary'} />
            </Box>
          </Box>
        </StickyBottomContainer>
      </Stack>
    </SideBarLayout>
  );
};

export default EventDetail;
