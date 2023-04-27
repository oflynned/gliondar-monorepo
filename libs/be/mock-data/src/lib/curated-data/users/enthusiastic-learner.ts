import { faker } from '@faker-js/faker';
import { Image, Profile, User } from '../../types';
import { Fluency, PreferredLanguage } from '@gliondar/shared/types';

export const enthusiasticLearner = new User(
  'user-1',
  faker.date.recent(30),
  faker.date.recent(1),
  'aisling.de.burca@gmail.com',
  new Image(
    'image-1',
    'https://this-person-does-not-exist.com/img/avatar-gen1189c6579f0bb5f7c355c8d1196517ad.jpg'
  ),
  new Profile(
    'profile-1',
    faker.date.recent(30),
    'Aisling De Búrca',
    Fluency.INTERMEDIATE,
    PreferredLanguage.IRISH
  )
);
