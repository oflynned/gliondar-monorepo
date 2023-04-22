import { FunctionComponent, PropsWithChildren } from 'react';
import { Box, BoxProps, styled } from '@mui/material';

type Props = BoxProps & {
  imageUrl?: string;
};

const Container = styled(Box)(({ theme }) => ({
  width: '100%',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
}));

const Gradient = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, transparent, black 125%)',
  height: '100%',
  width: '100%',
  borderRadius: 'inherit',
}));

export const GradientOverlay: FunctionComponent<PropsWithChildren<Props>> = ({
  imageUrl,
  children,
  ...props
}) => {
  return (
    <Container sx={{ backgroundImage: `url(${imageUrl})` }} {...props}>
      <Gradient>{children}</Gradient>
    </Container>
  );
};
