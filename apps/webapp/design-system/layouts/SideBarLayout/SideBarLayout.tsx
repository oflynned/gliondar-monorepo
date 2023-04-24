import { FunctionComponent, PropsWithChildren } from 'react';
import { NavBarPage, SideNavBar } from '../../components';
import { styled } from '@mui/material';
import { navigate } from '../../../router/router';
import { useRouter } from 'next/router';
import { Flex } from '../../atoms';

const StyledContentContainer = styled(Flex)(({ theme }) => ({
  flex: 1,
  background: theme.palette.background.paper,
}));

type Props = {
  activePage: NavBarPage;
  onNavigate?: (page: NavBarPage) => void;
  visible?: boolean;
};

export const SideBarLayout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  activePage,
  visible = true,
}) => {
  const router = useRouter();

  return (
    <Flex sx={{ visible: visible ? 'visible' : 'gone' }}>
      <SideNavBar
        activePage={activePage}
        onNavigate={(page) => navigate(router, page)}
      />
      <StyledContentContainer>{children}</StyledContentContainer>
    </Flex>
  );
};
