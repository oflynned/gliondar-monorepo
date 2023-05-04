import * as schema from './introspection.json';
import { IntrospectionQuery } from 'graphql/utilities';

export const introspection = JSON.parse(
  JSON.stringify(schema)
) as unknown as IntrospectionQuery;
