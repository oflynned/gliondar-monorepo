import { Fluency, PreferredLanguage } from '@gliondar/shared/types';
import { Image, ProfileBuilder, UserBuilder } from '../../types';

export const nativeSpeaker = new UserBuilder()
  .setId('user-0')
  .setCreatedAt(new Date())
  .setLastActiveAt(new Date())
  .setEmail('sean.mac.carthaigh@gmail.com')
  .setAvatar(
    new Image(
      'image-0',
      'https://this-person-does-not-exist.com/img/avatar-gene60a3a30fef06740b7c3f4cb36e60c32.jpg'
    )
  )
  .setProfile(
    new ProfileBuilder()
      .setId('profile-0')
      .setCreatedAt(new Date())
      .setName('Seán Mac Cárthaigh')
      .setInitials('SMC')
      .setFluency(Fluency.NATIVE)
      .setPreferredLanguage(PreferredLanguage.IRISH)
      .build()
  )
  .build();
