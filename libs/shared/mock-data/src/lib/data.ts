import {
  Gathering,
  GatheringPost,
  TextPost,
  User,
  UserGeneratedContent,
} from '@gliondar/shared/types';
import { getRandomItems } from './helper';
import { faker } from '@faker-js/faker/locale/en_IE';
import { curatedEvents, curatedText, curatedUsers } from './curated-data';
import { mockGatherings } from './faker-data';

const getMockGatherings = (curated?: boolean): Gathering[] => {
  if (curated) {
    return getRandomItems(curatedEvents);
  }

  return getRandomItems(mockGatherings);
};

const getMockTexts = (curated?: boolean): string[] => {
  if (curated) {
    return getRandomItems(curatedText);
  }

  return new Array(100).fill(0).map(() => faker.lorem.paragraph());
};

export const getMockUsers = (curated?: boolean): User[] => {
  if (curated) {
    const users = getRandomItems(curatedUsers);

    return users.map(
      (user): User => ({
        id: faker.datatype.uuid(),
        createdAt: faker.date.recent(30),
        lastOnlineAt: faker.date.recent(5),
        email: 'something@gmail.com',
        profile: user.profile,
      })
    );
  }
};

const getMockGatheringPosts = (curated?: boolean): GatheringPost[] => {
  const gatherings = getMockGatherings(curated);

  return gatherings.map(
    (gathering): GatheringPost => ({
      id: faker.datatype.uuid(),
      createdAt: faker.date.recent(5),
      score: faker.datatype.number({ min: -20, max: 200 }),
      gathering,
    })
  );
};

const getMockTextPosts = (curated?: boolean): TextPost[] => {
  const texts = getMockTexts(curated);

  return texts.map(
    (text): TextPost => ({
      id: faker.datatype.uuid(),
      createdAt: faker.date.recent(5),
      score: faker.datatype.number({ min: -20, max: 200 }),
      poster: getMockUsers(curated)[0],
      text,
    })
  );
};

export const getMockFeed = (curated?: boolean): UserGeneratedContent[] => {
  const gatheringPosts = getMockGatheringPosts(curated);
  const textPosts = getMockTextPosts(curated);

  return getRandomItems([...gatheringPosts, ...textPosts]);
};
