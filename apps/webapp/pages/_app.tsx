import '@fontsource/lato';
import '@fontsource/montserrat';

import { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme, NavBarPage, SideBarLayout } from '../design-system';
import { useRouter } from 'next/router';

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

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const activePage = getActivePageFromUrl(router.pathname);

  return (
    <ThemeProvider theme={lightTheme}>
      <CssBaseline />
      <SideBarLayout activePage={activePage}>
        <Component {...pageProps} />
      </SideBarLayout>
    </ThemeProvider>
  );
}
