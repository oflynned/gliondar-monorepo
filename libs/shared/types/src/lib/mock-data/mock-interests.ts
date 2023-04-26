import { faker } from '@faker-js/faker/locale/en_IE';
import { getRandomItem, getRandomItems } from './helper';
import { Interest } from '@gliondar/shared/types';
export const mockInterests = new Array(100).fill(0).map(
  (): Interest => ({
    id: faker.datatype.uuid(),
    title: faker.word.noun(),
  })
);

export const getRandomInterest = () => getRandomItem(mockInterests);

export const getRandomInterests = (count?: number) =>
  getRandomItems(mockInterests, count);
