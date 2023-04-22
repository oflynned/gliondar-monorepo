import { Gathering } from './types';
import { getRandomPeople, getRandomPerson } from './mock-people';
import { faker } from '@faker-js/faker/locale/en_IE';
import { capitalise, getRandomItem, getRandomItems } from './helper';

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

const getMockGatherings = () =>
  new Array(100).fill(0).map(
    (_item, index): Gathering => ({
      id: `event-${index}`,
      title: capitalise(faker.company.bs()),
      description: [
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
        faker.lorem.paragraph(),
      ],
      imageUrl: faker.image.imageUrl(undefined, undefined, undefined, true),
      attendees: getRandomPeople(),
      postedAt: new Date(),
      startsAt: faker.date.future(),
      address: [
        faker.address.streetAddress(),
        faker.address.city(),
        faker.address.county(),
        getEircode(),
        'Ireland',
      ].join(', '),
      organiser: getRandomPerson(),
    })
  );

export const mockGatherings = getMockGatherings();

export const getRandomGathering = () => getRandomItem(mockGatherings);

export const getRandomGatherings = (count?: number) =>
  getRandomItems(mockGatherings, count);
