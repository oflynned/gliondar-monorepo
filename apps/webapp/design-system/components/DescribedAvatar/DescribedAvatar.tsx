import { FunctionComponent } from 'react';
import { Box, styled, Typography } from '@mui/material';
import { Avatar, AvatarSize } from '../../atoms';

type Props = {
  title: string;
  subtitle: string;
  imageUrl?: string;
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
}) => {
  return (
    <Container>
      <Avatar imageUrl={imageUrl} label={subtitle} size={AvatarSize.LARGE} />
      <TextContainer>
        <Typography variant={'h6'}>{title}</Typography>
        <Typography variant={'h5'} fontWeight={700}>
          {subtitle}
        </Typography>
      </TextContainer>
    </Container>
  );
};
