import { FunctionComponent, PropsWithChildren } from 'react';
import { BoxProps, Typography } from '@gliondar/fe/mui';
import { Layout } from '../Layout';

type Props = BoxProps & { pageTitle: string };

export const TitledLayout: FunctionComponent<PropsWithChildren<Props>> = ({
  children,
  pageTitle,
  ...props
}) => {
  return (
    <Layout {...props}>
      <Typography variant={'h2'}>{pageTitle}</Typography>
      {children}
    </Layout>
  );
};
