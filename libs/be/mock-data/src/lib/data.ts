import { getRandomItems, shuffle } from './helper';
import { Gathering, TextPost, User } from './types';
import { Content } from './types/content';
import {
  curatedGatherings,
  curatedTextPosts,
  curatedUsers,
} from './curated-data';

export const getMockGatherings = (): Gathering[] => {
  return getRandomItems(curatedGatherings);
};

export const getMockTextPosts = (): TextPost[] => {
  return getRandomItems(curatedTextPosts);
};

export const getMockFeed = (curated?: boolean): Content[] => {
  return shuffle([...getMockTextPosts(), ...getMockGatherings()]);
};

export const getMockUsers = (): User[] => {
  return getRandomItems(curatedUsers);
};
