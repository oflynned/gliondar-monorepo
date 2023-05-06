import { TitledLayout } from '@gliondar/fe/design-system';
import { useRouter } from 'next/router';
import { curatedUsers } from '@gliondar/be/mock-data';

const Profile = () => {
  const router = useRouter();
  const { userId } = router.query;
  const user = curatedUsers.find((user) => user.id === userId);

  if (!user) {
    return null;
  }

  return (
    <TitledLayout pageTitle={user.profile.name} gap={4} flex={2}>
      Hello world!
    </TitledLayout>
  );
};

export default Profile;
