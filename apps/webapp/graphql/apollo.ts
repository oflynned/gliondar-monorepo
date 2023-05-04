import { ApolloLink, HttpLink } from '@apollo/client';
import { withScalars } from 'apollo-link-scalars';
import { buildClientSchema } from 'graphql/utilities';
import { introspection } from '@gliondar/shared/types';

export const link = ApolloLink.from([
  withScalars({
    schema: buildClientSchema(introspection),
    typesMap: {
      DateTime: {
        serialize: (parsed: unknown): string | null => {
          if (parsed instanceof Date) {
            return parsed.toString();
          }

          return null;
        },
        parseValue: (raw: unknown): Date | null => {
          if (typeof raw === 'string') {
            return new Date(raw);
          }

          return null;
        },
      },
    },
  }),
  new HttpLink({ uri: process.env.NEXT_PUBLIC_API_ENDPOINT }),
]);
