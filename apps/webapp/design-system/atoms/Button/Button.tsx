import {
  styled,
  Button as MuiButton,
  ButtonProps,
  Typography,
} from '@mui/material';
import { FunctionComponent } from 'react';

const StyledButton = styled(MuiButton)(({ theme }) => ({
  textTransform: 'none',
  paddingX: theme.spacing(4),
  paddingY: theme.spacing(1),
}));

type Props = ButtonProps & { label: string };

export const Button: FunctionComponent<Props> = ({ label, ...props }) => (
  <StyledButton
    variant={props.variant ?? 'outlined'}
    disableElevation
    {...props}
  >
    <Typography variant={'h5'}>{label}</Typography>
  </StyledButton>
);
