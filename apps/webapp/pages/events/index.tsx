import {
  Avatar,
  Button,
  Card,
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

  return (
    <SideBarLayout activePage={NavBarPage.EVENTS}>
      <Stack>
        <Hero
          title={'Pop Up Gaeltacht'}
          imageUrl={'https://c.stocksy.com/a/atQ400/z9/1056702.jpg'}
        />
        <StyledOutlineContainer>
          <DescribedAvatar
            title={'Hosted by'}
            subtitle={'Seán Mac Cárthaigh'}
          />
        </StyledOutlineContainer>

        <DetailsSection>
          <Stack>
            <Typography variant={'h4'}>Details</Typography>
            <Typography variant={'body1'}>
              Join us for a night of craic, ceol and cainte as we gather for a
              Pop Up Gaeltacht event on October 23rd at Hogan's Pub in Dublin!
              The fun kicks off at 7pm, so come early to secure your spot and
              settle in for a night of Irish language conversation, music and
              laughter... Join us for a night of craic, ceol and cainte as we
              gather for a Pop Up Gaeltacht event on October 23rd at Hogan's Pub
              in Dublin! The fun kicks off at 7pm, so come early to secure your
              spot and settle in for a night of Irish language conversation,
              music and laughter... Join us for a night of craic, ceol and
              cainte as we gather for a Pop Up Gaeltacht event on October 23rd
              at Hogan's Pub in Dublin! The fun kicks off at 7pm, so come early
              to secure your spot and settle in for a night of Irish language
              conversation, music and laughter...
            </Typography>
          </Stack>

          <Stack>
            <Typography variant={'h4'}>Attendees</Typography>
            <Card>
              <Flex gap={theme.spacing(1)}>
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
              </Flex>
            </Card>
          </Stack>

          <Stack>
            <Typography variant={'h4'}>Comments (31)</Typography>
            <Card>
              <Avatar />
              <Box sx={{ marginLeft: theme.spacing(1) }}>
                <Typography variant={'h5'}>Aisling Ní Mhurchú</Typography>
                <Typography>7:31pm, October 21 2023</Typography>
                <Typography>Are tickets available at the door?</Typography>
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
                <Typography>{'7pm, Tues Oct 10 2023'}</Typography>
                <Typography variant={'h5'}>
                  {'9 College St, Dublin, D02 WN62, Ireland'}
                </Typography>
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
