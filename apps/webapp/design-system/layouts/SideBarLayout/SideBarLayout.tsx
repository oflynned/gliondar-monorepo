import { FunctionComponent, PropsWithChildren } from 'react';
import { NavBarPage, SideNavBar } from '../../components';
import { Box, Paper, styled } from '@mui/material';
import { navigate } from '../../../router/router';
import { useRouter } from 'next/router';

const StyledContainer = styled(Box)({
  display: 'flex',
});

const StyledContentContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  background: theme.palette.background.paper,
}));

type Props = {
  activePage: NavBarPage;
  onNavigate?: (page: NavBarPage) => void;
};

export const SideBarLayout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  activePage,
}) => {
  const router = useRouter();

  return (
    <StyledContainer>
      <SideNavBar
        activePage={activePage}
        onNavigate={(page) => navigate(router, page)}
      />
      <StyledContentContainer>{children}</StyledContentContainer>
    </StyledContainer>
  );
};
