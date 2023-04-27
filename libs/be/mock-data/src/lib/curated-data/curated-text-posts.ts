import { TextPost } from '../types';
import { getRandomItem } from '../helper';
import { curatedUsers } from './curated-users';

const utterances = [
  'Cad é an Ghaeilge ar "fuckin Baltic" le do thoil?',
  'An bhfuil tusa ag iarraidh freastal ar mháistir-rang scríbhneoireachta le Darach Mac Con Iomaire?',
  'Bígí ann!',
];

export const curatedTextPosts = utterances.map(
  (utterance, index) =>
    new TextPost(`text-${index}`, new Date(), utterance, curatedUsers[0])
);
