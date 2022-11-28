# React Dreamland

Boilerplate for enabling ReactNative app to work on any environment.

## What's inside?

This turborepo uses [Yarn](https://yarnpkg.com/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `apps/web`: a [Next.js](https://nextjs.org/) app
- `apps/mobile`: a ReactNative app
- `apps/desktop`: an Electron app
- `packages/client`: ReactNative component library shared by `web`, `desktop` and `mobile` applications
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json`s used throughout the monorepo

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
