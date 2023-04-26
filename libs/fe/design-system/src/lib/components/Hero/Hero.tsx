import { FunctionComponent } from 'react';
import { Box, IconButton, styled, Typography } from '@gliondar/fe/mui';
import { ArrowBack } from '@mui/icons-material';
import { GradientOverlay } from '../../atoms';

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: '100%',
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
  onBackPress,
}) => {
  return (
    <GradientOverlay imageUrl={imageUrl} height={350}>
      <Container>
        {onBackPress ? (
          <IconButton sx={{ color: 'white' }} onClick={() => onBackPress()}>
            <ArrowBack fontSize={'large'} />
          </IconButton>
        ) : (
          <Box />
        )}
        <Typography variant={'h2'} color={'white'}>
          {title}
        </Typography>
      </Container>
    </GradientOverlay>
  );
};
