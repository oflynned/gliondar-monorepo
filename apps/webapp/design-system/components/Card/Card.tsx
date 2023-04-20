import { FunctionComponent, PropsWithChildren } from 'react';
import { Box, styled } from '@mui/material';

const StyledCard = styled(Box)({
  display: 'flex',
  marginTop: '16px',
  padding: '16px',
  borderRadius: '12px',
  background: 'white',
});

export const Card: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};
