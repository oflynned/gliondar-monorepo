import { FunctionComponent, PropsWithChildren } from 'react';
import { Box, styled } from '@mui/material';

const Container = styled(Box)(({ theme }) => ({ padding: theme.spacing(3) }));

export const Layout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <Container>{children}</Container>;
};
