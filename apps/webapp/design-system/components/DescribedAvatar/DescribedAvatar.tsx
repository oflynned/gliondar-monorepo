import { FunctionComponent } from 'react';
import { Box, IconButton, styled, Typography } from '@mui/material';
import { Avatar, AvatarSize, Flex, Stack } from '../../atoms';

type Props = {
  title: string;
  subtitle: string;
  imageUrl?: string;
  onClick?: () => void;
};

export const DescribedAvatar: FunctionComponent<Props> = ({
  imageUrl,
  title,
  subtitle,
  onClick = () => {},
}) => {
  return (
    <Flex gap={1}>
      <IconButton onClick={onClick}>
        <Avatar imageUrl={imageUrl} label={subtitle} />
      </IconButton>
      <Stack justifyContent={'center'}>
        <Typography variant={'h6'}>{title}</Typography>
        <Typography variant={'h5'} fontWeight={700}>
          {subtitle}
        </Typography>
      </Stack>
    </Flex>
  );
};
