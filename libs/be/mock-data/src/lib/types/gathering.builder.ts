import { User } from './user';
import { Attendee } from './attendee';
import { Image } from './image';
import { Gathering } from './gathering';
import {
  AttendanceStatus,
  CoordinateSet,
  Recurrence,
} from '@gliondar/shared/types';

export class GatheringBuilder {
  private readonly gathering: Gathering;

  constructor() {
    this.gathering = new Gathering();
  }

  setId(id: string): GatheringBuilder {
    this.gathering.id = id;
    return this;
  }

  setCreatedAt(createdAt: Date): GatheringBuilder {
    this.gathering.createdAt = createdAt;
    return this;
  }

  setCreatedBy(createdBy: User): GatheringBuilder {
    this.gathering.createdBy = createdBy;
    return this;
  }

  setTitle(title: string): GatheringBuilder {
    this.gathering.title = title;
    return this;
  }

  setDescription(description: string[]): GatheringBuilder {
    this.gathering.description = description;
    return this;
  }

  setTimezone(timezone: string): GatheringBuilder {
    this.gathering.timezone = timezone;
    return this;
  }

  setAddress(address: string): GatheringBuilder {
    this.gathering.address = address;
    return this;
  }

  setStartsAt(startsAt: Date): GatheringBuilder {
    this.gathering.startsAt = startsAt;
    return this;
  }

  setAttendees(attendees: Attendee[]): GatheringBuilder {
    this.gathering.attendees = attendees;
    return this;
  }

  setBookmarked(bookmarked: boolean): GatheringBuilder {
    this.gathering.bookmarked = bookmarked;
    return this;
  }

  setAttendance(attendance: AttendanceStatus): GatheringBuilder {
    this.gathering.attendance = attendance;
    return this;
  }

  setHeaderImage(image: Image): GatheringBuilder {
    this.gathering.headerImage = image;
    return this;
  }

  setRecurrence(recurrence: Recurrence): GatheringBuilder {
    this.gathering.recurrence = recurrence;
    return this;
  }

  setCoordinates(coordinateSet: CoordinateSet): GatheringBuilder {
    this.gathering.coordinates = coordinateSet;
    return this;
  }

  build(): Gathering {
    return this.gathering;
  }
}
