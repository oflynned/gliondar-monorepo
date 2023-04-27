import { faker } from '@faker-js/faker';
import { TextPost } from '../types';
import { getRandomItem } from '../helper';
import { mockUsers } from '../faker-data';

export const mockTextPosts = new Array(100).fill(0).map(
  (): TextPost => ({
    id: faker.datatype.uuid(),
    createdAt: faker.date.recent(30),
    createdBy: getRandomItem(mockUsers),
    text: faker.lorem.paragraph(),
  })
);
