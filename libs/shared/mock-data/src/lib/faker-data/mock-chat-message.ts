import { faker } from '@faker-js/faker';
import { getRandomPerson } from './mock-users';
import { getRandomItem, getRandomItems } from '../helper';
import { ChatMessage, ContentLanguage } from '@gliondar/shared/types';

const getChatMessage = (): ChatMessage => ({
  id: faker.datatype.uuid(),
  createdAt: new Date(),
  sentBy: getRandomPerson(),
  language: ContentLanguage.UNKNOWN,
  text: faker.lorem.text(),
});

export const mockChatMessages = new Array(100).fill(0).map((_value, index) => {
  const message = getChatMessage();

  message.text = `${index} - ${message.text}`;

  return message;
});

export const getRandomChatMessage = () => getRandomItem(mockChatMessages);

export const getRandomChatMessages = (count?: number) =>
  getRandomItems(mockChatMessages, count);
