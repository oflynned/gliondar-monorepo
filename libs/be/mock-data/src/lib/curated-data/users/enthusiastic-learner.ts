import { Fluency, PreferredLanguage } from '@gliondar/shared/types';
import { Image, UserBuilder, ProfileBuilder } from '../../types';

export const enthusiasticLearner = new UserBuilder()
  .setId('user-1')
  .setCreatedAt(new Date())
  .setLastActiveAt(new Date())
  .setEmail('aisling.de.burca@gmail.com')
  .setAvatar(
    new Image(
      'image-1',
      'https://this-person-does-not-exist.com/img/avatar-gen1189c6579f0bb5f7c355c8d1196517ad.jpg'
    )
  )
  .setProfile(
    new ProfileBuilder()
      .setId('profile-1')
      .setCreatedAt(new Date())
      .setName('Aisling De Búrca')
      .setInitials('ADB')
      .setFluency(Fluency.INTERMEDIATE)
      .setPreferredLanguage(PreferredLanguage.IRISH)
      .build()
  )
  .build();
