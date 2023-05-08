import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Image, Profile, User } from '@gliondar/shared/types';
import { curatedUsers } from '@gliondar/be/mock-data';

@Resolver('User')
export class UserResolver {
  @ResolveField('profile')
  async profile(@Parent() parent: User): Promise<Profile> {
    const user = curatedUsers.find((item) => item.id === parent.id);

    return {
      __typename: 'Profile',
      id: user.profile.id,
      name: user.profile.name,
      initials: user.profile.initials,
      fluency: user.profile.fluency,
      preferredLanguage: user.profile.preferredLanguage,
    };
  }

  // TODO should this be on the profile level?
  @ResolveField('avatar')
  async avatar(@Parent() parent: User): Promise<Image | null> {
    const user = curatedUsers.find((item) => item.id === parent.id);

    return {
      __typename: 'Image',
      id: user.avatar.id,
      url: user.avatar.url,
    };
  }
}
