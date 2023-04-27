import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { FeedModule } from './graphql/feed/feed.module';
import { GatheringModule } from './graphql/gathering/gathering.module';
import { UserModule } from './graphql/user/user.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
    FeedModule,
    GatheringModule,
    UserModule,
  ],
})
export class ApiModule {}
