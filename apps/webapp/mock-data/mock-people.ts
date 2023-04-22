import { Person } from './types';
import { faker } from '@faker-js/faker/locale/en';
import { getRandomItem, getRandomItems } from './helper';

const getMockPeople = () =>
  new Array(100).fill(0).map(
    (_item, index): Person => ({
      id: `person-${index}`,
      name: faker.name.fullName(),
      avatarUrl: faker.image.avatar(),
    })
  );

export const mockPeople = getMockPeople();

export const getRandomPerson = () => getRandomItem(mockPeople);

export const getRandomPeople = (count?: number) =>
  getRandomItems(mockPeople, count);
