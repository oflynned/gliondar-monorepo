import { Fluency, PreferredLanguage } from '@gliondar/shared/types';
import { UserBuilder, ProfileBuilder, Image } from '../../types';

export const beginner = new UserBuilder()
  .setId('user-2')
  .setCreatedAt(new Date())
  .setLastActiveAt(new Date())
  .setEmail('patrick.ryan@gmail.com')
  .setAvatar(
    new Image(
      'image-2',
      'https://this-person-does-not-exist.com/img/avatar-gen914a30daadf4bbb64b700c5f8777db2b.jpg'
    )
  )
  .setProfile(
    new ProfileBuilder()
      .setId('profile-2')
      .setCreatedAt(new Date())
      .setName('Patrick Ryan')
      .setInitials('PR')
      .setPreferredLanguage(PreferredLanguage.ENGLISH)
      .setFluency(Fluency.BEGINNER)
      .build()
  )
  .build();
