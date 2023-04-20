import { FunctionComponent, PropsWithChildren } from 'react';
import { Box, styled } from '@mui/material';

const Container = styled(Box)({ display: 'flex', flexDirection: 'column' });

export const Stack: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <Container>{children}</Container>
);
