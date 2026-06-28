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

# Production stage - only copy the bundled dist, no node_modules
FROM node:22-alpine AS runner

WORKDIR /app

# Install only production dependencies (minimal)
RUN npm install -g node-gyp

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package.json ./

EXPOSE 3000

ENV NODE_ENV=production

CMD ["node", "dist/index.js"]
