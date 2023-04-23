import { FunctionComponent, PropsWithChildren } from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import Image from 'next/image';

type Props = BoxProps & {
  imageUrl?: string;
};

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',
}));

const Gradient = styled(Box)(({ theme }) => ({
  top: 0,
  position: 'absolute',
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
    <Container {...props}>
      <Image
        style={{
          borderRadius: 'inherit',
          objectFit: 'cover',
          objectPosition: 'center',
          overflow: 'hidden',
          transition: 'all 0.3s ease',
        }}
        src={imageUrl}
        alt={'image'}
        fill
      />
      <Gradient>{children}</Gradient>
    </Container>
  );
};
