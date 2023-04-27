import { faker } from '@faker-js/faker';
import { Image, Profile, User } from '../../types';
import { Fluency, PreferredLanguage } from '@gliondar/shared/types';

export const nativeSpeaker = new User(
  'user-0',
  faker.date.recent(30),
  faker.date.recent(1),
  'sean.mac.carthaigh@gmail.com',
  new Image(
    'image-0',
    'https://this-person-does-not-exist.com/img/avatar-gene60a3a30fef06740b7c3f4cb36e60c32.jpg'
  ),
  new Profile(
    'profile-0',
    faker.date.recent(30),
    'Seán Mac Cárthaigh',
    Fluency.NATIVE,
    PreferredLanguage.IRISH
  )
);
