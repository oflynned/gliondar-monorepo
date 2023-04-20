import { Box, IconButton, styled } from '@mui/material';
import React, { FunctionComponent, ReactElement } from 'react';
import {
  ChatBubbleOutlineOutlined,
  Event,
  HomeOutlined,
  Menu,
  NotificationsOutlined,
  PersonOutlined,
  Settings,
} from '@mui/icons-material';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'sticky',
  top: 0,
  flexDirection: 'column',
  borderRight: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.default,
  padding: '16px',
  width: 'fit-content',
  height: '100vh',
  justifyContent: 'space-between',
}));

const StyledIconGroup = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

const StyledNavItem = styled(IconButton)({});

type NavItem = {
  label: string;
  icon: ReactElement;
};

const topItems: NavItem[] = [
  { label: 'Hamburger Toggle', icon: <Menu /> },
  { label: 'Home', icon: <HomeOutlined /> },
  { label: 'Connections', icon: <ChatBubbleOutlineOutlined /> },
  { label: 'Events', icon: <Event /> },
];

const bottomItems: NavItem[] = [
  { label: 'Settings', icon: <Settings /> },
  { label: 'Notifications', icon: <NotificationsOutlined /> },
  { label: 'Profile', icon: <PersonOutlined /> },
];

export const SideNavBar: FunctionComponent = () => {
  return (
    <Container>
      <StyledIconGroup>
        {topItems.map((item) => (
          <StyledNavItem>{item.icon}</StyledNavItem>
        ))}
      </StyledIconGroup>
      <StyledIconGroup>
        {bottomItems.map((item) => (
          <StyledNavItem>{item.icon}</StyledNavItem>
        ))}
      </StyledIconGroup>
    </Container>
  );
};
