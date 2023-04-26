import {
  Avatar,
  Button,
  Card,
  Comment,
  DescribedAvatar,
  Flex,
  Hero,
  Map,
  Stack,
  StickyBottomContainer,
} from '../../design-system';
import { Box, IconButton, styled, Typography } from '@mui/material';
import {
  AccessTimeOutlined,
  BookmarkAddOutlined,
  EventRepeatOutlined,
  LocationOnOutlined,
} from '@mui/icons-material';
import { useRouter } from 'next/router';
import { mockGatherings } from '../../mock-data/mock-gatherings';
import { Gathering } from '@gliondar/shared/types';

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
  const router = useRouter();
  const { eventId } = router.query;

  const gathering: Gathering = mockGatherings.find(
    (gathering) => gathering.id === eventId
  );

  if (!gathering) {
    return null;
  }

  return (
    <>
      <Stack width={'100%'}>
        <Hero
          title={gathering.title}
          imageUrl={gathering.imageUrl}
          onBackPress={() => router.back()}
        />
        <StyledOutlineContainer>
          <DescribedAvatar
            title={'Hosted by'}
            subtitle={gathering.createdBy.profile.name}
            imageUrl={gathering.createdBy.avatar.url}
            onClick={() => router.push(`/users/${gathering.createdBy.id}`)}
          />
          {/*<Stack alignItems={'end'}>*/}
          {/*  <Typography variant={'h6'}>*/}
          {/*    {100 - gathering.attendees.length} places remaining*/}
          {/*  </Typography>*/}
          {/*  <Typography variant={'h5'}>Free entry</Typography>*/}
          {/*</Stack>*/}
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
                <Flex gap={2} padding={2} flexWrap={'wrap'}>
                  {gathering.attendees.map((attendee) => (
                    <Avatar
                      imageUrl={attendee.user.avatar.url}
                      label={attendee.user.profile.name}
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
                  {gathering.attendees.splice(0, 10).map((person) => (
                    <Comment
                      key={person.id}
                      poster={person}
                      postedAt={gathering.createdAt}
                      comment={'Responded with attending'}
                    />
                  ))}
                </Stack>
              </Card>
            </Stack>
            <Flex justifyContent={'end'} maxWidth={512}>
              <Stack gap={2}>
                <Card padding={2}>
                  <Flex>
                    <Stack gap={2}>
                      <Flex gap={1}>
                        <EventRepeatOutlined />
                        <Typography>{'Weekly'}</Typography>
                      </Flex>
                      <Flex gap={1}>
                        <AccessTimeOutlined />
                        <Typography>
                          {gathering.startsAt.toLocaleString()}
                        </Typography>
                      </Flex>
                      <Flex gap={1}>
                        <LocationOnOutlined />
                        <Typography>{gathering.address}</Typography>
                      </Flex>
                    </Stack>
                  </Flex>
                </Card>
                <Card height={256}>
                  <Flex
                    sx={{ cursor: 'pointer' }}
                    onClick={() => window.open('https://google.com/maps')}
                    borderRadius={1}
                    justifyContent={'center'}
                    alignItems={'center'}
                    width={'100%'}
                  >
                    <Map />
                  </Flex>
                </Card>
                <Card>
                  <Stack padding={2} width={'100%'} gap={2}>
                    <Stack gap={1}>
                      <Typography variant={'h4'}>Event chat</Typography>
                      <Typography>
                        {`${gathering.attendees.length} other users are chatting right now`}
                      </Typography>
                    </Stack>
                    <Box alignSelf={'flex-end'}>
                      <Button label={'Join chat'} />
                    </Box>
                  </Stack>
                </Card>
                <Card>
                  <Stack padding={2} width={350} gap={2}>
                    <Box>
                      <Typography variant={'h4'}>Safety</Typography>
                    </Box>
                    <Flex gap={1}>
                      <Button
                        label={'Report'}
                        color={'error'}
                        variant={'outlined'}
                      />
                      <Button
                        label={'Block'}
                        color={'error'}
                        variant={'outlined'}
                      />
                    </Flex>
                  </Stack>
                </Card>
              </Stack>
            </Flex>
          </Flex>
        </DetailsSection>

        <StickyBottomContainer>
          <Flex justifyContent={'space-between'} width={'100%'}>
            <Flex alignItems={'flex-end'}>
              <Box>
                <Typography>{gathering.startsAt.toLocaleString()}</Typography>
                <Typography variant={'h5'}>{gathering.title}</Typography>
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
    </>
  );
};

export default EventDetail;
