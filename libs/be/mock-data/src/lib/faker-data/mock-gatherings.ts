import { Gathering, Image } from '../types';
import { getRandomPerson } from './mock-users';
import { faker } from '@faker-js/faker/locale/en_IE';
import { capitalise, getRandomItem, getRandomItems } from '../helper';

const getLetter = (): string => {
  const letters = new Array(26)
    .fill(0)
    .map((_item, index) => String.fromCharCode(index + 65).toUpperCase());

  return getRandomItem(letters);
};

const getNumber = (): number => {
  const numbers = new Array(10).fill(0).map((_item, index) => index);

  return getRandomItem(numbers);
};

const getEircode = (): string => {
  return [
    getLetter(),
    getNumber(),
    getNumber(),
    ' ',
    getLetter(),
    getNumber(),
    getNumber(),
    getNumber(),
  ].join('');
};

export const mockGatherings = new Array(100)
  .fill(0)
  .map((_item, index): Gathering => {
    const address = [
      faker.address.streetAddress(),
      faker.address.city(),
      faker.address.county(),
      getEircode(),
      'Ireland',
    ].join(', ');

    return new Gathering(
      `event-${index}`,
      faker.date.recent(30),
      getRandomPerson(),
      capitalise(faker.company.bs()),
      [
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
      ],
      'Europe/Dublin',
      address,
      faker.date.soon(30),
      [],
      false,
      new Image(
        faker.datatype.uuid(),
        faker.image.imageUrl(undefined, undefined, undefined, true)
      )
    );
  });

export const getRandomGatherings = (count?: number) =>
  getRandomItems(mockGatherings, count);
