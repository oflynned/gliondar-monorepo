import { FunctionComponent } from 'react';
import { Box, IconButton, styled, Tooltip } from '@mui/material';
import Image from 'next/image';

const RoundedAvatar = styled('img')({
  borderRadius: '50%',
  border: '1px solid #ECECEC',
});

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
    <Box>
      <RoundedAvatar width={size} height={size} src={imageUrl} alt={label} />
    </Box>
  );
};
