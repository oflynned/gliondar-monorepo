import { DescribedAvatar, Flex } from '@gliondar/fe/design-system';
import { styled } from '@gliondar/fe/mui';
import { FunctionComponent } from 'react';
import { Gathering } from '@gliondar/shared/types';
import { useRouter } from 'next/router';

const StyledOutlineContainer = styled(Flex)(({ theme }) => ({
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
        subtitle={createdBy.profile.name}
        imageUrl={createdBy.avatar?.url}
        onClick={() => router.push(`/users/${createdBy.id}`)}
      />
    </StyledOutlineContainer>
  );
};
