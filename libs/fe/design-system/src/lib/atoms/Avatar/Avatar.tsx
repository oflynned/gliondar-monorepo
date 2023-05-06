import { FunctionComponent } from 'react';
import { styled } from '@gliondar/fe/mui';
import Image from 'next/image';
import { Typography } from '@mui/material';

const RoundedAvatar = styled(Image)(({ theme }) => ({
  borderRadius: '50%',
  border: `1px solid ${theme.palette.divider}`,
}));

export enum AvatarSize {
  SMALL = 32,
  MEDIUM = 48,
  LARGE = 64,
}

type Props = {
  label?: string;
  imageUrl?: string;
  size?: AvatarSize;
};

export const Avatar: FunctionComponent<Props> = ({
  imageUrl,
  label = 'avatar',
  size = AvatarSize.MEDIUM,
}) => {
  if (imageUrl) {
    return (
      <RoundedAvatar
        width={size}
        height={size}
        src={imageUrl}
        alt={label}
        // placeholder={'blur'}
        unoptimized
      />
    );
  }

  // TODO wrap this with a colour and make into a rounded circle
  return <Typography>{label}</Typography>;
};
