import { Image } from './image';
import { Profile } from './profile';

export class User {
  id: string;
  createdAt: Date;
  lastOnlineAt: Date;
  email: string;
  avatar?: Image;
  profile?: Profile;
}
