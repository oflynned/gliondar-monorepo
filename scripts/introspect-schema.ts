import { getIntrospectionQuery } from 'graphql/utilities';
import fetch from 'node-fetch';
import { join } from 'path';
import { writeFile } from 'fs/promises';

(async () => {
  const endpoint = new URL('http://localhost:3000/graphql');
  const response = await fetch(endpoint, {
    method: 'POST',
    timeout: 30_000,
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: getIntrospectionQuery(),
    }),
  });

  const payload = await response.json();

  await writeFile(
    join(__dirname, '../libs/shared/types/src/lib/introspection.json'),
    JSON.stringify(payload.data),
    { encoding: 'utf-8' }
  );
})();
