import { createContext } from "../../graphql/context";
import { schema } from "../../graphql/schema";
import { ApolloServer } from "apollo-server-micro";
import cors from "micro-cors";
import { NextApiHandler } from "next";
import { RequestHandler } from "micro";

export const config = {
  api: {
    bodyParser: false,
  },
};

const apolloServer = new ApolloServer({
  schema,
  context: createContext,
});

let apolloServerHandler: NextApiHandler;

async function getApolloServerHandler() {
  if (!apolloServerHandler) {
    await apolloServer.start();

    apolloServerHandler = apolloServer.createHandler({
      path: "/api/graphql",
    });
  }

  return apolloServerHandler;
}

const handler: NextApiHandler = async (req, res) => {
  const apolloServerHandler = await getApolloServerHandler();

  if (req.method === "OPTIONS") {
    res.end();
    return;
  }

  return apolloServerHandler(req, res);
};

export default cors()(handler as RequestHandler);
