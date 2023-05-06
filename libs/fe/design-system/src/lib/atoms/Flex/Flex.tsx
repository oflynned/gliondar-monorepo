import { FunctionComponent, PropsWithChildren } from 'react';
import { Box, BoxProps, styled } from '@gliondar/fe/mui';

const Container = styled(Box)({ display: 'flex' });

export const Flex: FunctionComponent<PropsWithChildren<BoxProps>> = ({
  children,
  ...props
}) => <Container {...props}>{children}</Container>;
