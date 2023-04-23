import React, { FunctionComponent } from 'react';
import { Box, IconButton, styled, Typography } from '@mui/material';
import { NavBarPage, NavItem } from './SideNavBar';
import { StyledIcon } from './NavBarIcon';
import { Button } from '../../atoms';

const StyledNavItem = styled(Box)<{ open?: boolean }>({
  display: 'flex',
  height: 32,
  alignItems: 'center',
  transition: 'all 0.3s ease',
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
  if (open) {
    return (
      <StyledNavItem onClick={() => onNavigate(item.id)}>
        <Button
          sx={{ width: '100%' }}
          size={'large'}
          color={activePage === item.id ? 'primary' : 'inherit'}
          label={item.label}
          startIcon={item.icon}
          variant={'contained'}
        />
      </StyledNavItem>
    );
  }

  return (
    <StyledNavItem>
      <StyledIcon
        color={activePage === item.id ? 'primary' : 'inherit'}
        onClick={() => onNavigate(item.id)}
      >
        {item.icon}
      </StyledIcon>
    </StyledNavItem>
  );
};
