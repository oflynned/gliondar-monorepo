import {
  Avatar,
  DescribedAvatar,
  Hero,
  Button,
  Card,
  SideBarLayout,
  StickyBottomContainer,
  Stack,
  Flex,
} from '../design-system';
import { Box, IconButton, Paper, styled, Typography } from '@mui/material';
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

const Index = () => {
  return (
    <SideBarLayout>
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
              <Flex gap={'8px'}>
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
              <Box sx={{ marginLeft: '8px' }}>
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
            <Box sx={{ display: 'flex', gap: '16px' }}>
              <IconButton sx={{ width: 'fit-content' }} color={'inherit'}>
                <BookmarkAddOutlined />
              </IconButton>
              <Button label={'Attending'} />
              <Button label={'Share'} colour={'secondary'} />
            </Box>
          </Box>
        </StickyBottomContainer>
      </Stack>
    </SideBarLayout>
  );
};

export default Index;
