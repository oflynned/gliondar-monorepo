import { getRandomItem } from './helper';

type LocalisedText = {
  ga: string;
  en: string;
};

const fluencyLevels: LocalisedText[] = [
  {
    en: 'fluent',
    ga: 'líofa',
  },
  {
    en: 'advanced',
    ga: 'ardléibhéal',
  },
  {
    en: 'intermediate',
    ga: 'meánach',
  },
  {
    en: 'beginner',
    ga: 'tosaitheoir',
  },
];

export const getRandomFluencyLevel = () => getRandomItem(fluencyLevels);
