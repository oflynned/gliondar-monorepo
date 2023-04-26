import { FunctionComponent, PropsWithChildren } from 'react';
import { Box, BoxProps, styled } from '@gliondar/fe/mui';

const StyledCard = styled(Box, {
  shouldForwardProp(prop: string): boolean {
    return prop !== 'canHover';
  },
})<{ canHover: boolean }>(({ theme, canHover }) => ({
  display: 'flex',
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.divider}`,
  background: theme.palette.common.white,
  transition: 'all 0.3s ease',
  '&:hover': canHover
    ? {
        cursor: 'pointer',
        filter:
          'drop-shadow(0 4px 4px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))',
      }
    : {},
}));

type Props = BoxProps & {
  canHover?: boolean;
  onClick?: () => void;
};

export const Card: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  onClick,
  canHover = false,
  ...props
}) => {
  return (
    <StyledCard canHover={canHover} onClick={() => onClick?.()} {...props}>
      {children}
    </StyledCard>
  );
};
