import { FunctionComponent, PropsWithChildren, useState } from 'react';
import { Box, BoxProps, styled } from '@mui/material';
import Image from 'next/image';

type Props = BoxProps & {
  imageUrl?: string;
  hoverZoomEffect?: boolean;
};

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  position: 'relative',
  overflow: 'hidden',
}));

const Gradient = styled(Box)(({ theme }) => ({
  height: '100%',
  width: '100%',
  position: 'relative',
  background: 'linear-gradient(180deg, transparent, black 125%)',
  borderRadius: 'inherit',
}));

export const GradientOverlay: FunctionComponent<PropsWithChildren<Props>> = ({
  imageUrl,
  children,
  hoverZoomEffect = false,
  ...props
}) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <Container
      {...props}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Image
        style={{
          borderRadius: 'inherit',
          objectFit: 'cover',
          objectPosition: 'center',
          overflow: 'hidden',
          transition: 'all 0.3s ease-in-out',
          transform: hoverZoomEffect ? `scale(${isHover ? 1.05 : 1})` : null,
        }}
        src={imageUrl}
        alt={'image'}
        unoptimized
        fill
      />
      <Gradient>{children}</Gradient>
    </Container>
  );
};
