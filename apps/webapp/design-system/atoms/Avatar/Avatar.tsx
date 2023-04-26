import { FunctionComponent } from 'react';
import { styled } from '@mui/material';
import Image from 'next/image';

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
  imageUrl: string;
  label: string;
  size?: AvatarSize;
};

export const Avatar: FunctionComponent<Props> = ({
  imageUrl,
  label,
  size = AvatarSize.MEDIUM,
}) => {
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
};
