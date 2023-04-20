import { FunctionComponent, PropsWithChildren } from 'react';
import { Box, BoxProps, styled } from '@mui/material';

const Container = styled(Box)({ display: 'flex' });

export const Flex: FunctionComponent<PropsWithChildren<BoxProps>> = ({
  children,
  ...props
}) => <Container {...props}>{children}</Container>;
