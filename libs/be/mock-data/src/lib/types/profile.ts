import { Fluency, PreferredLanguage } from '@gliondar/shared/types';

export class Profile {
  id: string;
  createdAt: Date;
  name: string;
  initials: string;
  fluency: Fluency;
  preferredLanguage: PreferredLanguage;
}
