import { faker } from '@faker-js/faker';
import { Image, Profile, User } from '../../types';
import { Fluency, PreferredLanguage } from '@gliondar/shared/types';

export const beginner = new User(
  'user-2',
  faker.date.recent(30),
  faker.date.recent(1),
  'patrick.ryan@gmail.com',
  new Image(
    'image-2',
    'https://this-person-does-not-exist.com/img/avatar-gen914a30daadf4bbb64b700c5f8777db2b.jpg'
  ),
  new Profile(
    'profile-2',
    faker.date.recent(30),
    'Patrick Ryan',
    Fluency.BEGINNER,
    PreferredLanguage.ENGLISH
  )
);
