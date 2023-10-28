import { FunctionComponent, PropsWithChildren } from 'react';
import { BoxProps, styled } from '@mui/material';
import { Stack } from '../../atoms';

const Container = styled(Stack)(({ theme }) => ({ padding: theme.spacing(3) }));

export const Layout: FunctionComponent<PropsWithChildren<BoxProps>> = ({
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};
