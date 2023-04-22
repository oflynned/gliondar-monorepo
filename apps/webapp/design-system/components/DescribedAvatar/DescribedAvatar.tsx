import { FunctionComponent } from 'react';
import { Box, IconButton, styled, Typography } from '@mui/material';
import { Avatar, AvatarSize } from '../../atoms';

type Props = {
  title: string;
  subtitle: string;
  imageUrl?: string;
  onClick?: () => void;
};

const Container = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
}));

const TextContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
});

export const DescribedAvatar: FunctionComponent<Props> = ({
  imageUrl,
  title,
  subtitle,
  onClick = () => {},
}) => {
  return (
    <Container>
      <IconButton onClick={onClick}>
        <Avatar imageUrl={imageUrl} label={subtitle} />
      </IconButton>
      <TextContainer>
        <Typography variant={'h6'}>{title}</Typography>
        <Typography variant={'h5'} fontWeight={700}>
          {subtitle}
        </Typography>
      </TextContainer>
    </Container>
  );
};
