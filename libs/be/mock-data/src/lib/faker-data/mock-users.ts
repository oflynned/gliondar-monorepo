import { faker } from '@faker-js/faker/locale/en';
import { getRandomItem, getRandomItems } from '../helper';
import { Image, Profile, User } from '../types';
import { Fluency, PreferredLanguage } from '@gliondar/shared/types';

const getMockPeople = () =>
  new Array(100).fill(0).map((_item, index): User => {
    const sex = faker.name.sexType();
    const forename = faker.name.firstName(sex);
    const surname = faker.name.lastName(sex);

    return new User(
      `user-${index}`,
      new Date(),
      new Date(),
      faker.internet.email(forename, surname),
      new Image(faker.datatype.uuid(), faker.internet.avatar()),
      new Profile(
        faker.datatype.uuid(),
        new Date(),
        `${forename} ${surname}`,
        faker.helpers.arrayElement([
          Fluency.NATIVE,
          Fluency.ADVANCED,
          Fluency.INTERMEDIATE,
          Fluency.BEGINNER,
        ]),
        faker.helpers.arrayElement([
          PreferredLanguage.IRISH,
          PreferredLanguage.ENGLISH,
        ])
      )
    );
  });

export const mockUsers = getMockPeople();

export const getRandomPerson = () => getRandomItem(mockUsers);

export const getRandomPeople = (count?: number) =>
  getRandomItems(mockUsers, count);
