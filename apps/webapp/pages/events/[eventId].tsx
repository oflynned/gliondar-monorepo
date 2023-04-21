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

const StyledOutlineContainer = styled(Flex)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.default,
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const DetailsSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(3),
  gap: theme.spacing(3),
}));

const EventDetail = () => {
  const theme = useTheme();
  const router = useRouter();
  const { eventId } = router.query;
  const gathering = mockEvents[eventId as string];

  if (!gathering) {
    return null;
  }

  return (
    <SideBarLayout activePage={NavBarPage.EVENTS}>
      <Stack width={'100%'}>
        <Hero
          title={gathering.title}
          imageUrl={gathering.imageUrl}
          onBackPress={() => router.back()}
        />
        <StyledOutlineContainer>
          <DescribedAvatar
            title={'Hosted by'}
            subtitle={gathering.organiser.name}
            imageUrl={gathering.organiser.avatarUrl}
          />
          <Stack alignItems={'end'}>
            <Typography variant={'h6'}>96 places remaining</Typography>
            <Typography variant={'h5'}>Free entry</Typography>
          </Stack>
        </StyledOutlineContainer>

        <DetailsSection>
          <Flex justifyContent={'space-between'}>
            <Stack gap={2} maxWidth={768}>
              <Typography variant={'h4'}>Details</Typography>
              <Card>
                <Stack padding={2} gap={2}>
                  {gathering.description.map((paragraph, index) => (
                    <Typography key={index}>{paragraph}</Typography>
                  ))}
                </Stack>
              </Card>
              <Typography variant={'h4'}>Attendees</Typography>
              <Card>
                <Flex gap={2} padding={2}>
                  {gathering.attendees.map((attendee) => (
                    <Avatar
                      imageUrl={attendee.avatarUrl}
                      label={attendee.name}
                      key={attendee.id}
                    />
                  ))}
                </Flex>
              </Card>

              <Typography
                variant={'h4'}
              >{`Comments (${gathering.attendees.length})`}</Typography>
              <Card>
                <Stack gap={2} padding={2}>
                  {gathering.attendees.map((person) => (
                    <Comment
                      poster={person}
                      postedAt={gathering.startsAt}
                      comment={'Responded with attending'}
                    />
                  ))}
                </Stack>
              </Card>
            </Stack>
            <Flex justifyContent={'end'} width={512}>
              <Stack gap={2}>
                <Card height={256}>
                  <Flex
                    justifyContent={'center'}
                    alignItems={'center'}
                    width={'100%'}
                  >
                    <Typography>Map</Typography>
                  </Flex>
                </Card>
                <Card>
                  <Stack padding={2} width={350} gap={2}>
                    <Box>
                      <Typography variant={'h4'}>Event chat</Typography>
                      <Typography>
                        {`${gathering.attendees.length} chatting now`}
                      </Typography>
                    </Box>
                    <Box alignSelf={'flex-end'}>
                      <Button label={'Attend'} />
                    </Box>
                  </Stack>
                </Card>
                <Box alignSelf={'flex-end'}>
                  <Button
                    label={'Report'}
                    color={'error'}
                    variant={'outlined'}
                  />
                </Box>
              </Stack>
            </Flex>
          </Flex>
        </DetailsSection>

        <StickyBottomContainer>
          <Flex justifyContent={'space-between'} width={'100%'}>
            <Flex alignItems={'flex-end'}>
              <IconButton color={'inherit'}>
                <LocationOnOutlined />
              </IconButton>
              <Box>
                <Typography>{gathering.startsAt}</Typography>
                <Typography variant={'h5'}>{gathering.address}</Typography>
              </Box>
            </Flex>
            <Flex gap={2}>
              <IconButton sx={{ width: 'fit-content' }} color={'inherit'}>
                <BookmarkAddOutlined />
              </IconButton>
              <Button label={'Attend'} color={'primary'} />
              <Button
                label={'Share'}
                color={'secondary'}
                variant={'outlined'}
              />
            </Flex>
          </Flex>
        </StickyBottomContainer>
      </Stack>
    </SideBarLayout>
  );
};

export default EventDetail;
