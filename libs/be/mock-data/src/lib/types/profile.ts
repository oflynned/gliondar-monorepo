import { Fluency, PreferredLanguage } from '@gliondar/shared/types';

export class Profile {
  constructor(
    readonly id: string,
    readonly createdAt: Date,
    readonly name: string,
    readonly fluency: Fluency,
    readonly preferredLanguage: PreferredLanguage
  ) {}
}
