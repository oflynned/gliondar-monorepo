import { TextPost } from './types';
import { getRandomPerson } from './mock-people';
import { faker } from '@faker-js/faker/locale/en';
import { getRandomItem, getRandomItems } from './helper';

const mockPosts = new Array(100).fill(0).map(
  (): TextPost => ({
    __typename: 'TextPost',
    id: faker.datatype.uuid(),
    text: faker.lorem.paragraph(),
    score: faker.datatype.number({ min: -20, max: 200 }),
    poster: getRandomPerson(),
    postedAt: new Date(),
    comments: [],
  })
);

export const getRandomPost = () => getRandomItem(mockPosts);

export const getRandomPosts = (count?: number) =>
  getRandomItems(mockPosts, count);

// export const mockFeed: Content[] = [
//   {
//     __typename: 'GatheringPost',
//     id: '1',
//     score: 14,
//     poster: getRandomUser(),
//   },
// ];
