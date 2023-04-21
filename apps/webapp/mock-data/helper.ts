import { faker } from '@faker-js/faker/locale/en_IE';

export function getRandomItem<T>(items: T[]): T {
  return faker.helpers.arrayElement(items);
}

export function getRandomItems<T>(items: T[], count?: number): T[] {
  return faker.helpers.arrayElements(items, count);
}
