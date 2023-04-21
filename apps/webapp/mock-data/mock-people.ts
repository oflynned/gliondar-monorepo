import { Person } from './types';
import { faker } from '@faker-js/faker/locale/en';
import { getRandomItem, getRandomItems } from './helper';

export const mockPeople: Person[] = new Array(100).fill(0).map(
  (): Person => ({
    id: faker.datatype.uuid(),
    name: faker.name.fullName(),
    avatarUrl: faker.image.avatar(),
  })
);

export const getRandomPerson = () => getRandomItem(mockPeople);

export const getRandomPeople = (count?: number) =>
  getRandomItems(mockPeople, count);
