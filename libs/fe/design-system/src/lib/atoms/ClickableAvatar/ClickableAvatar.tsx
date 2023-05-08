import { FunctionComponent } from 'react';
import { User } from '@gliondar/shared/types';
import { IconButton } from '@mui/material';
import { Avatar } from '@gliondar/fe/design-system';

type Props = {
  user: User;
  onAvatarClick?: (user: User) => void;
};

export const ClickableAvatar: FunctionComponent<Props> = ({
  user,
  onAvatarClick,
}) => {
  return (
    <IconButton onClick={() => onAvatarClick?.(user)}>
      <Avatar user={user} />
    </IconButton>
  );
};
