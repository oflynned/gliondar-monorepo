import { Fluency, PreferredLanguage, User } from '@gliondar/shared/types';

export const curatedUsers: User[] = [
  {
    id: 'user-0',
    createdAt: new Date(),
    lastOnlineAt: new Date(),
    email: 'sean.mac.carthaigh@gmail.com',
    profile: {
      id: 'profile-0',
      name: 'Seán Mac Cárthaigh',
      preferredLanguage: PreferredLanguage.GA,
      fluency: Fluency.NATIVE,
    },
    avatar: {
      id: 'avatar-0',
      url: 'https://this-person-does-not-exist.com/img/avatar-gene60a3a30fef06740b7c3f4cb36e60c32.jpg',
    },
  },
  {
    id: 'user-1',
    createdAt: new Date(),
    lastOnlineAt: new Date(),
    email: 'aisling.de.burca@gmail.com',
    profile: {
      id: 'profile-1',
      name: 'Aisling De Búrca',
      preferredLanguage: PreferredLanguage.EN,
      fluency: Fluency.INTERMEDIATE,
    },
    avatar: {
      id: 'avatar-1',
      url: 'https://this-person-does-not-exist.com/img/avatar-gen1189c6579f0bb5f7c355c8d1196517ad.jpg',
    },
  },
  {
    id: 'user-2',
    createdAt: new Date(),
    lastOnlineAt: new Date(),
    email: 'padraig.mac.an.ri@gmail.com',
    profile: {
      id: 'profile-2',
      name: 'Pádraig Mac an Rí',
      preferredLanguage: PreferredLanguage.GA,
      fluency: Fluency.BEGINNER,
    },
    avatar: {
      id: 'avatar-2',
      url: 'https://this-person-does-not-exist.com/img/avatar-gen914a30daadf4bbb64b700c5f8777db2b.jpg',
    },
  },
];
