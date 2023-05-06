import { Attendee } from './attendee';
import { User } from './user';
import { Image } from './image';
import {
  AttendanceStatus,
  CoordinateSet,
  Recurrence,
} from '@gliondar/shared/types';

export class Gathering {
  id: string;
  createdAt: Date;
  createdBy: User;
  title: string;
  description: string[];
  timezone: string;
  address: string;
  startsAt: Date;
  attendees: Attendee[];
  bookmarked: boolean;
  recurrence: Recurrence;
  attendance: AttendanceStatus;
  headerImage?: Image;
  coordinates?: CoordinateSet;
}
