import { FunctionComponent } from 'react';
import { IconButton } from '@gliondar/fe/mui';
import { Avatar } from '../../../atoms';

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
