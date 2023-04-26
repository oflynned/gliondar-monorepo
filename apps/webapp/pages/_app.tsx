import '@fontsource/lato';
import '@fontsource/montserrat';

import { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@gliondar/fe/mui';
import {
  lightTheme,
  NavBarPage,
  SideBarLayout,
} from '@gliondar/fe/design-system';
import { NextRouter, useRouter } from 'next/router';

const getActivePageFromUrl = (url: string): NavBarPage | null => {
  switch (url) {
    case '/feed':
      return NavBarPage.FEED;
    case '/connections':
      return NavBarPage.CONNECTIONS;
    case '/events':
    case '/events/[eventId]':
      return NavBarPage.EVENTS;
    case '/settings':
      return NavBarPage.SETTINGS;
    case '/notifications':
      return NavBarPage.NOTIFICATIONS;
    case '/users/[userId]':
      return NavBarPage.PROFILE;
    default:
      return null;
  }
};

const navigate = (router: NextRouter, page: NavBarPage): void => {
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

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const activePage = getActivePageFromUrl(router.pathname);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <SideBarLayout
        activePage={activePage}
        onNavigate={(page) => navigate(router, page)}
      >
        <Component {...pageProps} />
      </SideBarLayout>
    </ThemeProvider>
  );
}
