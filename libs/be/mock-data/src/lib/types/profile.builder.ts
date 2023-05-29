import { Profile } from './profile';
import { Fluency, PreferredLanguage } from '@gliondar/shared/types';
export class ProfileBuilder {
  private readonly profile: Profile;

  constructor() {
    this.profile = new Profile();
  }

  setId(id: string): ProfileBuilder {
    this.profile.id = id;
    return this;
  }

  setCreatedAt(createdAt: Date): ProfileBuilder {
    this.profile.createdAt = createdAt;
    return this;
  }

  setName(name: string): ProfileBuilder {
    this.profile.name = name;
    return this;
  }

  setInitials(initials: string): ProfileBuilder {
    this.profile.initials = initials;
    return this;
  }

  setFluency(fluency: Fluency): ProfileBuilder {
    this.profile.fluency = fluency;
    return this;
  }

  setPreferredLanguage(preferredLanguage: PreferredLanguage): ProfileBuilder {
    this.profile.preferredLanguage = preferredLanguage;
    return this;
  }

  build(): Profile {
    return this.profile;
  }
}
