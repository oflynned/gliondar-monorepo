import { FunctionComponent } from 'react';
import { Box, IconButton, styled, Tooltip } from '@mui/material';
import Image from 'next/image';

const RoundedAvatar = styled('img')({
  borderRadius: '50%',
  border: '1px solid #ECECEC',
});

type Props = {
  imageUrl: string;
  label: string;
};

export const Avatar: FunctionComponent<Props> = ({ imageUrl, label }) => {
  return (
    <Tooltip title={label}>
      <Box>
        <RoundedAvatar width={64} height={64} src={imageUrl} alt={label} />
      </Box>
    </Tooltip>
  );
};
