import { User } from './user';
import { Profile } from './profile';
import { Image } from './image';

export class UserBuilder {
  private readonly user: User;

  constructor() {
    this.user = new User();
  }

  setId(id: string): UserBuilder {
    this.user.id = id;
    return this;
  }

  setCreatedAt(createdAt: Date): UserBuilder {
    this.user.createdAt = createdAt;
    return this;
  }

  setLastActiveAt(lastActiveAt: Date): UserBuilder {
    this.user.lastOnlineAt = lastActiveAt;
    return this;
  }

  setEmail(email: string): UserBuilder {
    this.user.email = email;
    return this;
  }

  setAvatar(avatar: Image): UserBuilder {
    this.user.avatar = avatar;
    return this;
  }

  setProfile(profile: Profile): UserBuilder {
    this.user.profile = profile;
    return this;
  }

  build(): User {
    return this.user;
  }
}
