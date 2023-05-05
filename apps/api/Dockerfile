FROM node:18-alpine as build
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,id=pnpm-store,target=/root/.local/share/pnpm/store/v3 \
    npm i -g pnpm && \
    pnpm install --frozen-lockfile && \
    pnpm types:graphql:generate && \
    pnpm types:graphql:merge && \
    pnpm build:api && \
    pnpm prune --prod

# Copy application code and node_modules
COPY apps/ libs/ scripts/ babel.config.json nx.json tsconfig.base.json ./
COPY node_modules/ ./

FROM node:18-alpine
WORKDIR /dist

# Copy built application and node_modules
COPY --from=build /usr/src/app/ ./

ENV NODE_ENV production

CMD ["node", "dist/apps/api/main.js"]
