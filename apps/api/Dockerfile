FROM node:18-alpine as build
WORKDIR /usr/src/app

RUN corepack enable pnpm

COPY package.json pnpm-lock.yaml node_modules ./
RUN pnpm install --frozen-lockfile

COPY apps libs scripts babel.config.json nx.json tsconfig.base.json ./

RUN pnpm types:graphql:generate
RUN pnpm types:graphql:merge
RUN pnpm build:api
RUN pnpm prune --prod

FROM node:18-alpine
WORKDIR /dist

COPY --from=build ./ ./

ENV NODE_ENV production

CMD ["node", "dist/apps/api/main.js"]
