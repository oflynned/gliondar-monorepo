import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();

definitionsFactory.generate({
  emitTypenameField: true,
  typePaths: ['./apps/**/*.graphql'],
  path: join(process.cwd(), 'libs/shared/types/src/lib/types.ts'),
  outputAs: 'interface',
  customScalarTypeMapping: {
    DateTime: 'Date',
  },
});
