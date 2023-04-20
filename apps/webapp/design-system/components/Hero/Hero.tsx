import { FunctionComponent } from 'react';
import { Box, styled, Typography } from '@mui/material';

const StyledHero = styled(Box, {
  shouldForwardProp(prop) {
    return prop !== 'imageUrl';
  },
})<{ imageUrl?: string }>(({ imageUrl }) => ({ theme }) => ({
  backgroundImage: imageUrl ? `url(${imageUrl})` : null,
  background: imageUrl ? null : theme.palette.background.paper,
  height: '350px',
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
}));

const GradientOverlay = styled(Box)(({ theme }) => ({
  background: 'linear-gradient(180deg, transparent, black 125%)',
  height: '100%',
  display: 'flex',
  alignItems: 'flex-end',
  padding: theme.spacing(3),
}));

type Props = {
  title: string;
  imageUrl?: string;
};

export const Hero: FunctionComponent<Props> = ({ title, imageUrl }) => {
  return (
    <StyledHero imageUrl={imageUrl}>
      <GradientOverlay>
        <Typography variant={'h2'} color={'white'}>
          {title}
        </Typography>
      </GradientOverlay>
    </StyledHero>
  );
};
