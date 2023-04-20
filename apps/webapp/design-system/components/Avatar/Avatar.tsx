import { FunctionComponent } from 'react';
import { styled } from '@mui/material';
import Image from 'next/image';

const RoundedAvatar = styled(Image)({
  borderRadius: '50%',
  border: '1px solid #ECECEC',
});

type Props = {
  imageUrl?: string;
};

export const Avatar: FunctionComponent<Props> = ({
  imageUrl = '/avatar.jpg',
}) => {
  return <RoundedAvatar width={64} height={64} src={imageUrl} alt={'Avatar'} />;
};
