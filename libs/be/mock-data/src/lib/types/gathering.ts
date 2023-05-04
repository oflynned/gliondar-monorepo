import { Attendee } from './attendee';
import { User } from './user';
import { Image } from './image';
import { Recurrence } from '@gliondar/shared/types';

export class Gathering {
  constructor(
    readonly id: string,
    readonly createdAt: Date,
    readonly createdBy: User,
    readonly title: string,
    readonly description: string[],
    readonly timezone: string,
    readonly address: string,
    readonly startsAt: Date,
    readonly attendees: Attendee[],
    readonly bookmarked: boolean,
    readonly headerImage: Image,
    readonly recurrence: Recurrence,
    readonly coordinates?: { latitude: number; longitude: number }
  ) {}
}
