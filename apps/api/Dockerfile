FROM node:18-alpine as build
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm && pnpm install --frozen-lockfile

# Copy application code and node_modules
COPY . ./

RUN pnpm types:graphql:generate && \
    pnpm types:graphql:merge && \
    pnpm build:api

FROM node:18-alpine
WORKDIR /dist

# Copy built application and node_modules
COPY --from=build /usr/src/app/ ./

ENV NODE_ENV production

CMD ["node", "dist/apps/api/main.js"]
