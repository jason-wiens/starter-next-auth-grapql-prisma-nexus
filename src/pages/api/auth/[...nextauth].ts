import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import Adapters from "next-auth/adapters";

import { NextApiHandler } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const options = {
  providers: [
    Providers.LinkedIn({
      clientId: process.env.PROVIDER_LINKEDIN_CLIENT_ID,
      clientSecret: process.env.PROVIDER_LINKEDIN_CLIENT_SECRET,
    }),
    Providers.Google({
      clientId: process.env.PROVIDER_GOOGLE_CLIENT_ID,
      clientSecret: process.env.PROVIDER_GOOGLE_CLIENT_SECRET,
    }),
    Providers.Email({
      server: {
        host: process.env.PROVIDER_SMTP_HOST,
        port: Number(process.env.PROVIDER_SMTP_PORT),
        auth: {
          user: process.env.PROVIDER_SMTP_USER,
          pass: process.env.PROVIDER_SMTP_PASSWORD,
        },
      },
      from: process.env.PROVIDER_SMTP_FROM,
    }),
  ],
  adapter: Adapters.Prisma.Adapter({
    prisma,
  }),

  secret: process.env.AUTH_SECRET,
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);

export default authHandler;
