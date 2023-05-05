FROM node:18-alpine as build

RUN apk add --virtual gyp curl bash python3 make g++ && rm -rf /var/cache/apk/*

WORKDIR /src

COPY . .

RUN npm i -g pnpm
RUN pnpm i
RUN pnpm types:graphql:generate
RUN pnpm types:graphql:merge
RUN pnpm build:api

FROM node:18-alpine

WORKDIR /dist

COPY --from=build /src/dist/ ./dist
COPY --from=build /src/node_modules ./node_modules

# passed as build arg to provide app version to app at runtime
ARG TAG_VERSION
ENV TAG_VERSION ${TAG_VERSION}

ENV NODE_ENV production

CMD ["node", "dist/api/main.js"]
