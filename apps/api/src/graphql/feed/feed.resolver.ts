import { Args, Query, Resolver } from '@nestjs/graphql';
import { UserGeneratedContent } from '@gliondar/shared/types';
import { Gathering, getMockFeed, TextPost } from '@gliondar/be/mock-data';

@Resolver('Feed')
export class FeedResolver {
  @Query('getFeed')
  async getFeed(): Promise<UserGeneratedContent[]> {
    const feed = getMockFeed(true);

    return feed
      .map((item): UserGeneratedContent => {
        if (item instanceof Gathering) {
          return {
            __typename: 'GatheringPost',
            id: item.id,
            createdAt: item.createdAt,
            score: 0,
            comments: [],
          };
        }

        if (item instanceof TextPost) {
          return {
            __typename: 'TextPost',
            id: item.id,
            createdAt: item.createdAt,
            text: item.text,
            score: 0,
            comments: [],
          };
        }

        return null;
      })
      .filter((item) => item !== null);
  }
}
