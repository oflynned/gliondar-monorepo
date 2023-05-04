import { join } from 'path';
import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { print } from 'graphql';
import * as fs from 'fs';

const types = loadFilesSync(join(process.cwd(), './apps/api/**/*.graphql'));
const definitions = mergeTypeDefs(types);
const printedTypeDefs = print(definitions);

fs.writeFileSync(
  join(process.cwd(), './libs/shared/types/src/lib/schema.graphql'),
  printedTypeDefs
);
