import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Gathering, Image, User } from '@gliondar/shared/types';
import { curatedGatherings } from '@gliondar/be/mock-data';

@Resolver('Gathering')
export class GatheringResolver {
  @Query('getGatheringById')
  async getGatheringById(@Args('id') id: string): Promise<Gathering | null> {
    const gathering = curatedGatherings.find(
      (gathering) => gathering.id === id
    );

    if (!gathering) {
      return null;
    }

    return {
      __typename: 'Gathering',
      id: gathering.id,
      title: gathering.title,
      description: gathering.description,
      createdAt: gathering.createdAt,
      startsAt: gathering.startsAt,
      recurrence: gathering.recurrence,
      address: gathering.address,
      bookmarked: gathering.bookmarked,
      coordinates: {
        latitude: gathering.coordinates.latitude,
        longitude: gathering.coordinates.longitude,
      },
      image: {
        __typename: 'Image',
        id: gathering.headerImage.id,
        url: gathering.headerImage.url,
      },
    };
  }

  @Query('getGatherings')
  async getGatherings(): Promise<Gathering[]> {
    return curatedGatherings.map(
      (gathering): Gathering => ({
        __typename: 'Gathering',
        id: gathering.id,
        title: gathering.title,
        description: gathering.description,
        createdAt: gathering.createdAt,
        address: gathering.address,
        bookmarked: gathering.bookmarked,
        image: {
          id: gathering.headerImage.id,
          url: gathering.headerImage.url,
        },
      })
    );
  }

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
