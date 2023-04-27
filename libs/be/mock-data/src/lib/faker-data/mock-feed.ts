import { faker } from '@faker-js/faker/locale/en';
import { getRandomItem, getRandomItems } from '../helper';
import { Content } from '../types/content';
import { mockTextPosts } from './mock-text-posts';
import { mockGatherings } from './mock-gatherings';

const content = faker.helpers.shuffle<Content>([
  ...mockGatherings,
  ...mockTextPosts,
]);

export const getRandomPost = () => getRandomItem(content);

export const getRandomPosts = (count?: number) =>
  getRandomItems(content, count);
