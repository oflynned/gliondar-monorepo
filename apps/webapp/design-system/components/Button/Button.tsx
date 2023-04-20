import { styled, Button as MuiButton, Typography } from '@mui/material';
import { FunctionComponent, PropsWithChildren } from 'react';

const StyledButton = styled(MuiButton)({
  textTransform: 'none',
  borderRadius: '12px',
  paddingX: '32px',
  paddingY: '8px',
});

type Props = {
  label: string;
  colour?: 'primary' | 'secondary' | 'error' | 'info';
};

export const Button: FunctionComponent<Props> = ({
  label,
  colour = 'primary',
}) => (
  <StyledButton variant={'contained'} disableElevation color={colour}>
    <Typography variant={'h5'} fontWeight={700}>
      {label}
    </Typography>
  </StyledButton>
);
