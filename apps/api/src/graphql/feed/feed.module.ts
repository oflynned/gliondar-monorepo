import { Module } from '@nestjs/common';
import { FeedResolver } from './feed.resolver';
import { GatheringPostResolver } from './gathering/gathering-post.resolver';
import { TextPostResolver } from './text/text-post.resolver';

@Module({
  providers: [FeedResolver, GatheringPostResolver, TextPostResolver],
})
export class FeedModule {}
