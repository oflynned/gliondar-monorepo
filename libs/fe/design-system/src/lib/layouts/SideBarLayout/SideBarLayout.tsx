import { FunctionComponent, PropsWithChildren } from 'react';
import { NavBarPage, SideNavBar } from '../../components';
import { styled } from '@mui/material';
import { Flex } from '../../atoms';

const StyledContentContainer = styled(Flex)(({ theme }) => ({
  flex: 1,
  background: theme.palette.background.paper,
}));

type Props = {
  activePage: NavBarPage | null;
  onNavigate?: (page: NavBarPage) => void;
  visible?: boolean;
};

export const SideBarLayout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  activePage,
  onNavigate,
  visible = true,
}) => {
  return (
    <Flex sx={{ visible: visible ? 'visible' : 'gone' }}>
      <SideNavBar
        activePage={activePage}
        onNavigate={(page) => onNavigate?.(page)}
      />
      <StyledContentContainer>{children}</StyledContentContainer>
    </Flex>
  );
};
