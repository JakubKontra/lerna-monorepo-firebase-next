# Lerna Monorepo with Next.js, UI Package, and Firebase

This repository demonstrates a monorepo managed by Lerna, containing a Next.js app, a shared UI package, and Firebase integration.

## Packages

The monorepo is organized into the following packages:

1. **frontend**: A Next.js web application that consumes components from the UI package.
2. **ui**: A collection of reusable UI components, built with React and TypeScript.
3. **core**: A collection of reusable core functions, hooks, etc.
4. **functions**: Serverless functions using Firebase Functions, providing backend services for the Next.js app.

## TODO

- [ ] Hygen boiler plate code generator
- [ ] Testing library
- [ ] Storybook
- [ ] i18n cached

## Getting Started

Follow these steps to set up the monorepo:

### Prerequisites

- Node.js 16.19.x or later
- Firebase CLI (optional, for deploying Firebase Functions)

### Installation

1. Clone the repository:

```shell
git clone https://github.com/JakubKontra/lerna-monorepo-firebase-next.git
cd lerna-monorepo-firebase-next
```

2. Install the Lerna CLI globally:

```shell
npm install -g lerna
```

3. Run
