import { styled, Button as MuiButton, Typography } from '@mui/material';
import { FunctionComponent, PropsWithChildren } from 'react';

const StyledButton = styled(MuiButton)(({ theme }) => ({
  textTransform: 'none',
  borderRadius: theme.shape.borderRadius,
  paddingX: theme.spacing(4),
  paddingY: theme.spacing(1),
}));

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
