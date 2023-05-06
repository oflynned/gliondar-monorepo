import { Module } from '@nestjs/common';
import { GraphQLISODateTime, GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { FeedModule } from './graphql/feed/feed.module';
import { GatheringModule } from './graphql/gathering/gathering.module';
import { UserModule } from './graphql/user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          introspection: true,
          playground: true,
          csrfPrevention: false,
          cache: 'bounded',
          typePaths: [
            config.get('NODE_ENV') === 'production'
              ? join(__dirname, './assets/schema.graphql')
              : join(__dirname, './**/*.graphql'),
          ],
          resolvers: {
            DateTime: GraphQLISODateTime,
          },
        };
      },
    }),
    FeedModule,
    GatheringModule,
    UserModule,
  ],
})
export class ApiModule {}
