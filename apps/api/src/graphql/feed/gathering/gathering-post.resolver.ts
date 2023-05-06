import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Gathering, GatheringPost, User } from '@gliondar/shared/types';
import { curatedGatherings } from '@gliondar/be/mock-data';

@Resolver('GatheringPost')
export class GatheringPostResolver {
  @ResolveField('postedBy')
  async postedBy(@Parent() parent: GatheringPost): Promise<User> {
    // TODO these have the same ids to simplify things temporarily
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

  @ResolveField('gathering')
  async gathering(@Parent() parent: GatheringPost): Promise<Gathering> {
    // TODO these have the same ids to simplify things temporarily
    const gathering = curatedGatherings.find(
      (gathering) => gathering.id === parent.id
    );

    return {
      __typename: 'Gathering',
      id: gathering.id,
      createdAt: gathering.createdAt,
      title: gathering.title,
      description: gathering.description,
      address: gathering.address,
      bookmarked: gathering.bookmarked,
      timezone: gathering.timezone,
      startsAt: gathering.startsAt,
    };
  }
}
