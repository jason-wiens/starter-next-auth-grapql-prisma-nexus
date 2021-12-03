import { makeSchema, asNexusMethod } from "nexus";
import { DateTimeResolver } from "graphql-scalars";
import path from "path";
// import { applyMiddleware } from "graphql-middleware";
// import { permissions } from "../permissions";
import * as types from "./types";

export const GQLDate = asNexusMethod(DateTimeResolver, "date");

export const schema = makeSchema({
  types: [types, GQLDate],
  plugins: [],
  outputs: {
    typegen: path.join(process.cwd(), "src/graphql/generated/nexus-typegen.ts"),
    schema: path.join(process.cwd(), "src/graphql/generated/schema.graphql"),
  },
  contextType: {
    module: path.join(process.cwd(), "src/graphql/context.ts"),
    export: "Context",
  },
  sourceTypes: {
    modules: [
      {
        module: "@prisma/client",
        alias: "prisma",
      },
    ],
  },
});

// export const schema = applyMiddleware(baseSchema, permissions);
