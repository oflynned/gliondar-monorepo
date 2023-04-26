import { Fluency, PreferredLanguage, User } from '../types';
import { faker } from '@faker-js/faker/locale/en';
import { getRandomItem, getRandomItems } from './helper';

const getMockPeople = () =>
  new Array(100).fill(0).map((_item, index): User => {
    const sex = faker.name.sexType();
    const forename = faker.name.firstName(sex);
    const surname = faker.name.lastName(sex);

    return {
      id: `user-${index}`,
      createdAt: new Date(),
      lastOnlineAt: new Date(),
      email: faker.internet.email(),
      profile: {
        id: `profile-${index}`,
        name: `${forename} ${surname}`,
        preferredLanguage: PreferredLanguage.GA,
        fluency: Fluency.NATIVE,
      },
      avatar: {
        id: `avatar-${index}`,
        url: faker.image.avatar(),
      },
    };
  });

export const mockPeople = getMockPeople();

export const getRandomPerson = () => getRandomItem(mockPeople);

export const getRandomPeople = (count?: number) =>
  getRandomItems(mockPeople, count);
