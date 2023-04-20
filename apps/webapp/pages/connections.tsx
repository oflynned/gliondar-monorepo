import { NavBarPage, SideBarLayout } from '../design-system';
import { Box, Typography, useTheme } from '@mui/material';

const Connections = () => {
  const theme = useTheme();

  return (
    <SideBarLayout activePage={NavBarPage.NOTIFICATIONS}>
      <Box sx={{ padding: theme.spacing(3) }}>
        <Typography variant={'h2'}>Connections</Typography>
      </Box>
    </SideBarLayout>
  );
};

export default Connections;
