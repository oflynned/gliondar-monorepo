import { NavBarPage, SideBarLayout } from '../design-system';
import { Box, Typography, useTheme } from '@mui/material';

const Feed = () => {
  const theme = useTheme();

  return (
    <SideBarLayout activePage={NavBarPage.FEED}>
      <Box sx={{ padding: theme.spacing(3) }}>
        <Typography variant={'h2'}>Feed</Typography>
      </Box>
    </SideBarLayout>
  );
};

export default Feed;
