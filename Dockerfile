FROM node:18-bullseye-slim

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate
