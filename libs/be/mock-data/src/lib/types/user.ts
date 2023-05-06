import { Image } from './image';
import { Profile } from './profile';

export class User {
  constructor(
    readonly id: string,
    readonly createdAt: Date,
    readonly lastOnlineAt: Date,
    readonly email: string,
    readonly avatar: Image,
    readonly profile: Profile
  ) {}
}
