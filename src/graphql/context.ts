import { PrismaClient } from "@prisma/client";
import { MicroRequest } from "apollo-server-micro/dist/types";
import { ServerResponse } from "http";

const db = new PrismaClient();

export interface Context {
  db: PrismaClient;
  res: ServerResponse;
  req: MicroRequest;
}

export function createContext({ res, req }: Context) {
  return { db, res, req };
}
