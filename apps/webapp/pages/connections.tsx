import { Flex, NavBarPage, SideBarLayout } from '../design-system';
import { Typography, useTheme } from '@mui/material';

const Connections = () => {
  return (
    <SideBarLayout activePage={NavBarPage.CONNECTIONS}>
      <Flex>
        <Typography>Connections</Typography>
      </Flex>
    </SideBarLayout>
  );
};

export default Connections;
