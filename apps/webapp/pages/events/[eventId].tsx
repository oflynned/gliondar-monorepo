import {
  Button,
  Card,
  Comment,
  DescribedAvatar,
  Flex,
  formatTimestampToDateTime,
  GatheringAttendees,
  Hero,
  Map,
  StickyBottomContainer,
} from '@gliondar/fe/design-system';
import { Box, IconButton, styled, Typography, Stack } from '@gliondar/fe/mui';
import {
  AccessTimeOutlined,
  BookmarkAddOutlined,
  EventRepeatOutlined,
  LocationOnOutlined,
} from '@mui/icons-material';
import { useRouter } from 'next/router';
import { useQuery } from '@apollo/client';
import { Gathering, Recurrence } from '@gliondar/shared/types';
import { GET_GATHERING_BY_ID } from '@gliondar/fe/graphql';

const StyledOutlineContainer = styled(Flex)(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.default,
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  alignItems: 'center',
}));

const DetailsSection = styled(Flex)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: theme.spacing(3),
  gap: theme.spacing(3),
}));

const getRecurrence = (recurrence?: Recurrence): string => {
  switch (recurrence) {
    default:
    case Recurrence.NONE:
      return 'Does not repeat';
    case Recurrence.DAILY:
      return 'Takes place daily';
    case Recurrence.WEEKLY:
      return 'Takes place weekly';
    case Recurrence.FORTNIGHTLY:
      return 'Takes place fortnightly';
    case Recurrence.MONTHLY:
      return 'Takes place monthly';
  }
};

const EventDetail = () => {
  const router = useRouter();
  const { eventId } = router.query;
  const { data, loading, error } = useQuery<{
    getGatheringById?: Gathering | null;
  }>(GET_GATHERING_BY_ID, {
    variables: { id: eventId },
  });

  if (loading) {
    return <Typography>Loading...</Typography>;
  }

  const gathering = data?.getGatheringById;

  if (!gathering) {
    return null;
  }

  return (
    <>
      <Stack width={'100%'} display={'flex'}>
        <Hero
          title={gathering.title}
          imageUrl={gathering.image.url}
          onBackPress={() => router.back()}
        />
        <StyledOutlineContainer>
          <DescribedAvatar
            title={'Hosted by'}
            subtitle={gathering.createdBy.profile.name}
            imageUrl={gathering.createdBy.avatar.url}
            onClick={() => router.push(`/users/${gathering.createdBy.id}`)}
          />
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
              <GatheringAttendees attendees={gathering.attendees} />

              <Typography variant={'h4'}>{'Comments'}</Typography>
              <Card>
                <Stack gap={2} padding={2}>
                  {gathering.comments ? (
                    gathering.comments.map((comment) => (
                      <Comment
                        key={comment.id}
                        poster={comment.postedBy}
                        postedAt={comment.createdAt}
                        comment={comment.text}
                      />
                    ))
                  ) : (
                    <Typography>Be the first to comment</Typography>
                  )}
                </Stack>
              </Card>
            </Stack>
            <Flex justifyContent={'end'} maxWidth={384}>
              <Stack gap={2}>
                <Card padding={2}>
                  <Flex>
                    <Stack gap={2}>
                      <Flex gap={1}>
                        <EventRepeatOutlined />
                        <Typography>
                          {getRecurrence(gathering.recurrence)}
                        </Typography>
                      </Flex>
                      <Flex gap={1}>
                        <AccessTimeOutlined />
                        <Typography>
                          {formatTimestampToDateTime(gathering.startsAt)}
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
                <Typography>
                  {formatTimestampToDateTime(gathering.startsAt)}
                </Typography>
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
