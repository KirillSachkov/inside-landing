FROM node:22.23-alpine AS build

WORKDIR /workspace/app

COPY app/package.json app/package-lock.json ./
RUN npm ci

COPY app/ ./
RUN npm run verify

FROM nginx:1.28-alpine

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /workspace/app/dist /usr/share/nginx/html

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget --quiet --spider http://127.0.0.1:8080/healthz || exit 1
