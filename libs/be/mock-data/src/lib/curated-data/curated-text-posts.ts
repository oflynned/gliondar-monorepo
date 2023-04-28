import { TextPost } from '../types';
import { curatedUsers } from './curated-users';
import { getRandomItem } from '../helper';
import { faker } from '@faker-js/faker';

const utterances = [
  'Cad é an Ghaeilge ar "fuckin Baltic" le do thoil?',
  'An bhfuil tusa ag iarraidh freastal ar mháistir-rang scríbhneoireachta le Darach Mac Con Iomaire?',
  'Fáilte romhat chuig an suíomh!',
];

export const curatedTextPosts = utterances.map(
  (utterance, index) =>
    new TextPost(
      `text-${index}`,
      faker.date.recent(1),
      utterance,
      getRandomItem(curatedUsers)
    )
);
