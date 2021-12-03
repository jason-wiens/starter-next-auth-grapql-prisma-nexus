# Starter fullstack application with Next.js, NextAuth.js, GraphQl, Prisma, Nexus, Apollo, GraphQl-Shield, Material-Ui

[![typescript](https://img.shields.io/badge/typescript-3178c6.svg?style=flat-square)](https://github.com/microsoft/TypeScript)

This starter application includes a basic setup for the following stack:

- Typescript
- Next.js
- React
- Material-Ui
- Emotion
- NextAuth.js
- GraphQl
- Apollo Server
- Apollo Client
- Prisma
- Nexus
- GraphQl-Shield
- Eslint
- Prettier
- Husky

## 🚀 Getting started

1. Clone Repo
2. `npm init`

### Setup database

3. BYO database...
4. Create a new .env file in the `/prisma` folder
5. Add connection string environment variable
   `DATABASE_URL=<PUT_CONNECTION_STRING_HERE>`

### Initiate prisma and nexus

6. Run the following command in cli
   `npm run generate && prisma migrate`

### Add authentication credentials for oauth

7. Create a new `.env.local` file in the root of the project
8. Add the following environment variables (plus additional providers if any)
   `
   EMAIL_SERVER=
   EMAIL_FROM=

PROVIDER_LINKEDIN_CLIENT_ID=
PROVIDER_LINKEDIN_CLIENT_SECRET=

PROVIDER_GOOGLE_CLIENT_ID=
PROVIDER_GOOGLE_CLIENT_SECRET=

PROVIDER_GITHUB_CLIENT_ID=
PROVIDER_GITHUB_CLIENT_SECRET=

AUTH_SECRET=
`

### Start playing

9. Run `npm run dev` to get the server up and running
10. visit `http://localhost:3000/api/graphql` to access graphql playground
11. Run `prisma studio` and navigate to `http://localhost:5555` to access the database
