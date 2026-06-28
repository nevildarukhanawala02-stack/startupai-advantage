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

# Build - ensure vite is not bundled
RUN pnpm build

# Production stage - copy dist and necessary runtime files
FROM node:22-alpine AS runner

WORKDIR /app

# Install pnpm
RUN corepack enable && corepack prepare pnpm@latest --activate

# Copy package files
COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./

# Copy node_modules from builder (includes all dependencies)
COPY --from=builder /app/node_modules ./node_modules

# Copy the built application
COPY --from=builder /app/dist ./dist

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]
