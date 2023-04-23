import {
  styled,
  Button as MuiButton,
  ButtonProps,
  Typography,
} from '@mui/material';
import { FunctionComponent } from 'react';
import { Flex } from '../Flex';

const StyledButton = styled(MuiButton)(({ theme }) => ({
  textTransform: 'none',
}));

type Props = ButtonProps & { label: string };

export const Button: FunctionComponent<Props> = ({ label, ...props }) => (
  <StyledButton
    variant={props.variant ?? 'outlined'}
    size={props.size ?? 'large'}
    disableElevation
    {...props}
  >
    <Flex width={'100%'}>
      <Typography variant={'h5'}>{label}</Typography>
    </Flex>
  </StyledButton>
);
