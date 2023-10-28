import { Box, styled } from '@mui/material';
import { FunctionComponent, PropsWithChildren } from 'react';

const StyledStickyBottomContainer = styled(Box)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  position: 'sticky',
  bottom: 0,
  display: 'flex',
  padding: theme.spacing(3),
  alignSelf: 'flex-end',
  width: '100%',
  background: theme.palette.background.default,
}));

export const StickyBottomContainer: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <StyledStickyBottomContainer>{children}</StyledStickyBottomContainer>;
};
