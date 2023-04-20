import { NavBarPage } from '../design-system';
import { NextRouter } from 'next/router';

export const navigate = (router: NextRouter, page: NavBarPage): void => {
  switch (page) {
    default:
    case NavBarPage.FEED:
      router.push('/feed');
      break;
    case NavBarPage.CONNECTIONS:
      router.push('/connections');
      break;
    case NavBarPage.EVENTS:
      router.push('/events');
      break;
    case NavBarPage.NOTIFICATIONS:
      router.push('/notifications');
      break;
    case NavBarPage.SETTINGS:
      router.push('/settings');
      break;
    case NavBarPage.PROFILE:
      router.push('/profile');
      break;
  }
};
