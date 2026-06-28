# StartupAI Advantage - Railway Dockerfile
FROM node:22-alpine AS builder

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml ./
COPY patches ./patches/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source
COPY . .

# Build
RUN pnpm build

# Production stage
FROM node:22-alpine AS runner

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yaml ./
COPY --from=builder /app/patches ./patches/

RUN pnpm install --frozen-lockfile --prod

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]
