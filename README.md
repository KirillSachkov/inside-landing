# inside-landing

Production landing for Sachkov Inside. The site is a static Astro build deployed
as a frontend application.

## Local development

Requires Node.js 22.12 or newer within the Node 22 release line.

```sh
npm ci --prefix app
npm run dev --prefix app
```

Run the complete production verification:

```sh
npm run verify --prefix app
```

## Timeweb App Platform

Create the application with these settings:

- source: GitHub repository `KirillSachkov/inside-landing`;
- branch: `main`;
- application type: `Frontend` -> `Other`;
- Node.js version: `22`;
- build command: `npm run verify`;
- system dependencies: leave empty;
- build directory: `dist`;
- project directory: `app`;
- environment variables: none;
- build from the latest commit: enabled if automatic deploys are wanted;

After the technical preview is verified, attach `sachkov.dev` in the application's
domain settings. Timeweb App Platform will issue and renew the Let's Encrypt
certificate. Confirm that replacing the service currently attached to
`sachkov.dev` is intended before changing its binding or DNS record.

## Production smoke test

```sh
curl --fail --show-error --silent https://sachkov.dev/healthz
curl --fail --show-error --silent https://sachkov.dev/robots.txt
curl --fail --show-error --silent https://sachkov.dev/sitemap.xml
curl --fail --show-error --silent --head https://sachkov.dev/
```
