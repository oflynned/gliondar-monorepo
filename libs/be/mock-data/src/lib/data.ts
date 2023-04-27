import { getRandomItems, shuffle } from './helper';
import {
  curatedGatherings,
  curatedTextPosts,
  curatedUsers,
} from './curated-data';
import { mockGatherings, mockUsers } from './faker-data';
import { Gathering, TextPost, User } from './types';
import { mockTextPosts } from './faker-data/mock-text-posts';
import { Content } from './types/content';

export const getMockGatherings = (curated?: boolean): Gathering[] => {
  if (curated) {
    return curatedGatherings;
  }

  return getRandomItems(mockGatherings);
};

export const getMockTextPosts = (curated?: boolean): TextPost[] => {
  if (curated) {
    return getRandomItems(curatedTextPosts);
  }

  return getRandomItems(mockTextPosts);
};

export const getMockFeed = (curated?: boolean): Content[] => {
  return shuffle([...getMockTextPosts(curated), ...getMockGatherings(curated)]);
};

export const getMockUsers = (curated?: boolean): User[] => {
  if (curated) {
    return getRandomItems(curatedUsers);
  }

  return getRandomItems(mockUsers);
};
