import { FunctionComponent } from 'react';
import { Box, IconButton, styled, Typography } from '@mui/material';
import { ArrowBack, ArrowBackIos } from '@mui/icons-material';

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
  justifyContent: 'space-between',
  flexDirection: 'column',
  alignItems: 'start',
  padding: theme.spacing(3),
}));

type Props = {
  title: string;
  imageUrl?: string;
  onBackPress?: () => void;
};

export const Hero: FunctionComponent<Props> = ({
  title,
  imageUrl,
  onBackPress = () => {},
}) => {
  return (
    <StyledHero imageUrl={imageUrl}>
      <GradientOverlay>
        <IconButton sx={{ color: 'white' }} onClick={() => onBackPress()}>
          <ArrowBack fontSize={'large'} />
        </IconButton>
        <Typography variant={'h2'} color={'white'}>
          {title}
        </Typography>
      </GradientOverlay>
    </StyledHero>
  );
};
