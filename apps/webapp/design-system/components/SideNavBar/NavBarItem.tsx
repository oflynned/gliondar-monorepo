import React, { FunctionComponent } from 'react';
import { Box, IconButton, styled, Typography } from '@mui/material';
import { NavBarPage, NavItem } from './SideNavBar';
import { StyledIcon } from './NavBarIcon';

const StyledNavItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
});

type Props = {
  open: boolean;
  item: NavItem;
  activePage: NavBarPage;
  onNavigate: (page: NavBarPage) => void;
};

export const NavBarItem: FunctionComponent<Props> = ({
  open,
  item,
  activePage,
  onNavigate,
}) => {
  const navigate = (page: NavBarPage) => {
    if (activePage !== page) {
      onNavigate(page);
    }
  };

  return (
    <StyledNavItem>
      <StyledIcon onClick={() => navigate(item.id)}>{item.icon}</StyledIcon>
      {open ? <Typography>{item.label}</Typography> : null}
    </StyledNavItem>
  );
};
