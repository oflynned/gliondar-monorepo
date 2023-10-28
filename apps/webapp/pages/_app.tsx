import '@fontsource/lato';
import '@fontsource/montserrat';

import { AppProps } from 'next/app';
import { CssBaseline, ThemeProvider } from '@mui/material';
import {
  lightTheme,
  NavBarPage,
  SideBarLayout,
} from '@gliondar/fe/design-system';
import { NextRouter, useRouter } from 'next/router';
import { useState } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { link } from '../graphql';

const getActivePageFromUrl = (url: string): NavBarPage | null => {
  switch (url) {
    case '/feed':
      return NavBarPage.FEED;
    case '/connections':
      return NavBarPage.CONNECTIONS;
    case '/around-me':
      return NavBarPage.AROUND_ME;
    case '/events':
    case '/events/[eventId]':
      return NavBarPage.EVENTS;
    case '/settings':
      return NavBarPage.SETTINGS;
    case '/notifications':
      return NavBarPage.NOTIFICATIONS;
    case '/users':
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
    case NavBarPage.AROUND_ME:
      router.push('/around-me');
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
      router.push('/users');
      break;
  }
};

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    link,
    cache: new InMemoryCache(),
    defaultOptions: {
      query: {
        fetchPolicy: 'no-cache',
      },
    },
  });

  const [theme] = useState(() => lightTheme);
  const router = useRouter();
  const activePage = getActivePageFromUrl(router.pathname);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SideBarLayout
          activePage={activePage}
          onNavigate={(page) => navigate(router, page)}
        >
          <Component {...pageProps} />
        </SideBarLayout>
      </ThemeProvider>
    </ApolloProvider>
  );
}
