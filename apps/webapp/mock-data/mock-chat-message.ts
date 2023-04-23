import { faker } from '@faker-js/faker';
import { Message } from './types';
import { getRandomPerson } from './mock-people';
import { getRandomItem, getRandomItems } from './helper';

const getChatMessage = (): Message => ({
  id: faker.datatype.uuid(),
  message: faker.lorem.text(),
  sentAt: new Date(),
  sentBy: getRandomPerson(),
});

export const mockChatMessages = new Array(100).fill(0).map((_value, index) => {
  const message = getChatMessage();

  message.message = `${index} - ${message.message}`;

  return message;
});

export const getRandomChatMessage = () => getRandomItem(mockChatMessages);

export const getRandomChatMessages = (count?: number) =>
  getRandomItems(mockChatMessages, count);
