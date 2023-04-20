import { FunctionComponent, PropsWithChildren } from 'react';
import { Box, styled } from '@mui/material';

const StyledCard = styled(Box)({
  display: 'flex',
  marginTop: '16px',
  padding: '16px',
  borderRadius: '12px',
  background: 'white',
});

type Props = {
  onClick?: () => void;
};

export const Card: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  onClick = () => {},
}) => {
  return <StyledCard onClick={onClick}>{children}</StyledCard>;
};
