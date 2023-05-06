import { AttendanceStatus } from '@gliondar/shared/types';
import { User } from './user';

export class Attendee {
  constructor(
    readonly id: string,
    readonly attendance: AttendanceStatus,
    readonly user: User
  ) {}
}
