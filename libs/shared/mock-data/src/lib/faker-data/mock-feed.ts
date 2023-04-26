import { UserGeneratedContent, GatheringPost, TextPost } from '../types';
import { getRandomPerson } from './mock-users';
import { faker } from '@faker-js/faker/locale/en';
import { getRandomItem, getRandomItems } from '../helper';
import { getRandomGathering } from './mock-gatherings';

const mockTextPosts = new Array(100).fill(0).map(
  (_item, index): TextPost => ({
    __typename: 'TextPost',
    id: `post-${index}`,
    text: faker.lorem.paragraph(),
    score: faker.datatype.number({ min: -20, max: 200 }),
    poster: getRandomPerson(),
    createdAt: new Date(),
    comments: [],
  })
);

const mockGatheringPosts = new Array(100).fill(0).map(
  (_item, index): GatheringPost => ({
    __typename: 'GatheringPost',
    id: `event-${index}`,
    gathering: getRandomGathering(),
    score: faker.datatype.number({ min: -20, max: 200 }),
    poster: getRandomPerson(),
    createdAt: new Date(),
    comments: [],
  })
);

const content = faker.helpers.shuffle<UserGeneratedContent>([
  ...mockTextPosts,
  ...mockGatheringPosts,
]);

export const getRandomPost = () => getRandomItem(content);

export const getRandomPosts = (count?: number) =>
  getRandomItems(content, count);
