import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Gathering, Image, User } from '@gliondar/shared/types';
import { curatedGatherings } from '@gliondar/be/mock-data';

@Resolver('Gathering')
export class GatheringResolver {
  @ResolveField('createdBy')
  async createdBy(@Parent() parent: Gathering): Promise<User> {
    const gathering = curatedGatherings.find(
      (gathering) => gathering.id === parent.id
    );

    return {
      __typename: 'User',
      id: gathering.createdBy.id,
      email: gathering.createdBy.email,
      createdAt: gathering.createdBy.createdAt,
      lastOnlineAt: gathering.createdBy.lastOnlineAt,
      profile: null,
    };
  }

  @ResolveField('image')
  async image(@Parent() parent: Gathering): Promise<Image | null> {
    const gathering = curatedGatherings.find(
      (gathering) => gathering.id === parent.id
    );

    if (!gathering) {
      return null;
    }

    return {
      __typename: 'Image',
      id: gathering.headerImage.id,
      url: gathering.headerImage.url,
    };
  }
}
