import { Box, styled } from '@mui/material';
import React, { FunctionComponent, ReactElement, useState } from 'react';
import {
  ChatBubbleOutlineOutlined,
  Event,
  HomeOutlined,
  MenuOutlined,
  NotificationsOutlined,
  PersonOutlined,
  Settings,
} from '@mui/icons-material';
import { NavBarItem } from './NavBarItem';
import { StyledIcon } from './NavBarIcon';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'sticky',
  top: 0,
  flexDirection: 'column',
  borderRight: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.default,
  padding: theme.spacing(3),
  height: '100vh',
  justifyContent: 'space-between',
}));

const StyledItemGroup = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
}));

export enum NavBarPage {
  FEED,
  CONNECTIONS,
  EVENTS,
  NOTIFICATIONS,
  SETTINGS,
  PROFILE,
}

export type NavItem = {
  id: NavBarPage;
  label: string;
  icon: ReactElement;
};

const topItems: NavItem[] = [
  { id: NavBarPage.FEED, label: 'Feed', icon: <HomeOutlined /> },
  {
    id: NavBarPage.CONNECTIONS,
    label: 'Connections',
    icon: <ChatBubbleOutlineOutlined />,
  },
  { id: NavBarPage.EVENTS, label: 'Events', icon: <Event /> },
];

const bottomItems: NavItem[] = [
  { id: NavBarPage.SETTINGS, label: 'Settings', icon: <Settings /> },
  {
    id: NavBarPage.NOTIFICATIONS,
    label: 'Notifications',
    icon: <NotificationsOutlined />,
  },
  { id: NavBarPage.PROFILE, label: 'Profile', icon: <PersonOutlined /> },
];

type Props = {
  activePage: NavBarPage;
  onNavigate: (newPage: NavBarPage) => void;
};

export const SideNavBar: FunctionComponent<Props> = ({
  activePage,
  onNavigate,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <StyledItemGroup>
        <StyledIcon
          color={'inherit'}
          onClick={() => setOpen((prevState) => !prevState)}
        >
          <MenuOutlined />
        </StyledIcon>
        <StyledItemGroup>
          {topItems.map((item) => (
            <NavBarItem
              item={item}
              onNavigate={onNavigate}
              activePage={activePage}
              open={open}
            />
          ))}
        </StyledItemGroup>
      </StyledItemGroup>
      <StyledItemGroup>
        {bottomItems.map((item) => (
          <NavBarItem
            item={item}
            onNavigate={onNavigate}
            activePage={activePage}
            open={open}
          />
        ))}
      </StyledItemGroup>
    </Container>
  );
};
