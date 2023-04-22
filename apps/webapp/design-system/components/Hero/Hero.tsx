import { FunctionComponent } from 'react';
import { Box, IconButton, styled, Typography } from '@mui/material';
import { ArrowBack, ArrowBackIos } from '@mui/icons-material';
import { GradientOverlay } from '../../atoms';

const Container = styled(Box)(({ theme }) => ({
  height: '350px',
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
    <GradientOverlay imageUrl={imageUrl}>
      <Container>
        <IconButton sx={{ color: 'white' }} onClick={() => onBackPress()}>
          <ArrowBack fontSize={'large'} />
        </IconButton>
        <Typography variant={'h2'} color={'white'}>
          {title}
        </Typography>
      </Container>
    </GradientOverlay>
  );
};
