import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { TextPost, User } from '@gliondar/shared/types';
import { curatedTextPosts } from '@gliondar/be/mock-data';

@Resolver('TextPost')
export class TextPostResolver {
  @ResolveField('postedBy')
  async postedBy(@Parent() parent: TextPost): Promise<User> {
    const post = curatedTextPosts.find((post) => post.id === parent.id);

    return {
      __typename: 'User',
      id: post.createdBy.id,
      email: post.createdBy.email,
      createdAt: post.createdBy.createdAt,
      lastOnlineAt: post.createdBy.lastOnlineAt,
      profile: null,
    };
  }
}
