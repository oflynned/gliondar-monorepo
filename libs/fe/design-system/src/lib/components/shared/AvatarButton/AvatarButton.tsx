import { FunctionComponent } from 'react';
import { IconButton } from '@gliondar/fe/mui';
import { Avatar } from '../../../atoms';

type Props = {
  imageUrl: string;
  label: string;
};

export const AvatarButton: FunctionComponent<Props> = ({ imageUrl, label }) => {
  // TODO maybe some version that shows user initials if they don't have an avatar?
  //      colour can just be some preset list and the hash of the name can be mapped to the closest shade
  return (
    <IconButton>
      <Avatar imageUrl={imageUrl} label={label} />
    </IconButton>
  );
};
