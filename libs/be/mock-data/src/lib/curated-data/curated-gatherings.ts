import { Gathering } from '../types';
import { popUpGaeltacht, conversationCircle, sportsMatch } from './gatherings';

export const curatedGatherings: Gathering[] = [
  popUpGaeltacht,
  conversationCircle,
  sportsMatch,
];

export const curatedEventDiscovery: {
  timeframe: string;
  gatherings: Gathering[];
}[] = [
  {
    timeframe: 'Today',
    gatherings: [curatedGatherings[0]],
  },
  {
    timeframe: 'Tomorrow',
    gatherings: [curatedGatherings[1], curatedGatherings[2]],
  },
  {
    timeframe: 'Later',
    gatherings: curatedGatherings,
  },
];
