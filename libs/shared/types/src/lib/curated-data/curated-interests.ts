import { Interest } from '../types';

const interests = [
  'Internet',
  'Pets',
  'Events',
  'News',
  'Community',
  'Volunteering',
  'Writing',
  'Languages',
  'Photography',
  'Travel',
  'Sports',
  'GAA',
  'Yoga',
  'Dance',
  'Music',
  'Reading',
  'Cooking',
  'Baking',
  'Shopping',
  'DJing',
  'Fashion',
  'Sewing',
  'Tattoos',
  'Hunting',
  'Movies',
  'TV shows',
  'Drama',
  'Makeup',
  'Computers',
  'Fitness',
];

export const curatedInterests: Interest[] = interests.map(
  (interest, index): Interest => ({ id: index.toString(), title: interest })
);
