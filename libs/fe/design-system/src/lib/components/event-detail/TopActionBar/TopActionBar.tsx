import { DescribedAvatar } from '@gliondar/fe/design-system';
import { styled } from '@mui/material';
import { FunctionComponent } from 'react';
import { Gathering } from '@gliondar/shared/types';
import { useRouter } from 'next/router';
import { Box } from '@mui/material';

const StyledOutlineContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  borderBottom: `1px solid ${theme.palette.divider}`,
  background: theme.palette.background.default,
  padding: theme.spacing(3),
  justifyContent: 'space-between',
  alignItems: 'center',
}));

type Props = Pick<Gathering, 'createdBy'>;

export const TopActionBar: FunctionComponent<Props> = ({ createdBy }) => {
  const router = useRouter();

  if (!createdBy) {
    return null;
  }

  return (
    <StyledOutlineContainer>
      <DescribedAvatar
        title={'Hosted by'}
        user={createdBy}
        onClick={() => router.push(`/users/${createdBy.id}`)}
      />
    </StyledOutlineContainer>
  );
};
