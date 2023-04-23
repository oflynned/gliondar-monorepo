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
  return (
    <StyledNavItem>
      <StyledIcon
        color={activePage === item.id ? 'primary' : 'inherit'}
        onClick={() => onNavigate(item.id)}
      >
        {item.icon}
      </StyledIcon>
      {open ? <Typography>{item.label}</Typography> : null}
    </StyledNavItem>
  );
};
