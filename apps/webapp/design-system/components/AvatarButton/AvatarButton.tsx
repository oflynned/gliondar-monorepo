import { FunctionComponent } from 'react';
import { IconButton } from '@mui/material';
import { Avatar } from '../../atoms';

type Props = {
  imageUrl: string;
  label: string;
};

export const AvatarButton: FunctionComponent<Props> = ({ imageUrl, label }) => {
  return (
    <IconButton>
      <Avatar imageUrl={imageUrl} label={label} />
    </IconButton>
  );
};
