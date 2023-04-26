import { faker } from '@faker-js/faker/locale/en_IE';

export function getRandomItem<T>(items: T[]): T {
  return faker.helpers.arrayElement(items);
}

export function getRandomItems<T>(items: T[], count?: number): T[] {
  return faker.helpers.arrayElements(items, count);
}

export const capitalise = (text: string): string => {
  return text
    .replace(/-/g, ' ')
    .split(' ')
    .map((word) => {
      const firstLetter = word.slice(0, 1);
      const restOfWord = word.slice(1);

      return [firstLetter.toUpperCase(), restOfWord].join('');
    })
    .join(' ');
};
