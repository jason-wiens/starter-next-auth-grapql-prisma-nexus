import { objectType, extendType, stringArg, nonNull } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("email");
    t.string("image");
    t.string("createdAt");
    t.string("updatedAt");
  },
});

export const UserQueries = extendType({
  type: "Query",
  definition: (t) => {
    t.field("user", {
      type: "User",
      args: {
        userId: nonNull(stringArg()),
      },
      resolve: async (_, args, ctx) => {
        const user = await ctx.db.user.findUnique({
          where: { id: args.userId },
        });
        return user;
      },
    });
  },
});

export const UserMutations = extendType({
  type: "Mutation",
  definition: (t) => {
    t.field("createOneUser", {
      type: "User",
      args: {
        name: stringArg(),
        email: nonNull(stringArg()),
      },
      resolve: (_, { name, email }, ctx) => {
        return ctx.db.user.create({
          data: {
            name,
            email,
          },
        });
      },
    });
  },
});
