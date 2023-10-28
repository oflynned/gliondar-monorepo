import { FunctionComponent, PropsWithChildren } from 'react';
import { BoxProps, Typography } from '@mui/material';
import { Layout } from '../Layout';

type Props = BoxProps & { pageTitle?: string };

export const TitledLayout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  pageTitle,
  ...props
}) => {
  return (
    <Layout {...props}>
      {pageTitle ? <Typography variant={'h2'}>{pageTitle}</Typography> : null}
      {children}
    </Layout>
  );
};
