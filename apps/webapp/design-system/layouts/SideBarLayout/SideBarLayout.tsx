import { FunctionComponent, PropsWithChildren } from 'react';
import { SideNavBar } from '../../components';
import { Box, Paper, styled } from '@mui/material';

const StyledContainer = styled(Box)({
  display: 'flex',
});

const StyledContentContainer = styled(Paper)({
  flex: 1,
});

export const SideBarLayout: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return (
    <StyledContainer>
      <SideNavBar />
      <StyledContentContainer>{children}</StyledContentContainer>
    </StyledContainer>
  );
};
