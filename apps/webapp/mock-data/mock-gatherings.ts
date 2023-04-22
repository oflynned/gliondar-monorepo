import { Gathering } from './types';
import { getRandomPeople, getRandomPerson } from './mock-people';
import { faker } from '@faker-js/faker/locale/en_IE';
import { capitalise, getRandomItem, getRandomItems } from './helper';

export const mockGatherings = new Array(100).fill(0).map(
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
      faker.address.county(),
      faker.address.city(),
      faker.address.zipCode(),
      'Ireland',
    ].join(', '),
    organiser: getRandomPerson(),
  })
);

export const getRandomGathering = () => getRandomItem(mockGatherings);

export const getRandomGatherings = (count?: number) =>
  getRandomItems(mockGatherings, count);
