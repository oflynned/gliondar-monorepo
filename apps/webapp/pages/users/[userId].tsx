import { TitledLayout } from '../../design-system';
import { useRouter } from 'next/router';
import { mockPeople } from '../../mock-data/mock-people';

const Profile = () => {
  const router = useRouter();
  const { userId } = router.query;
  const user = mockPeople.find((user) => user.id === userId);

  if (!user) {
    return null;
  }

  return (
    <TitledLayout pageTitle={user.profile.name} gap={4} flex={2}></TitledLayout>
  );
};

export default Profile;
