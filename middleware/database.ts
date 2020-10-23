import { Db, MongoClient } from "mongodb";
import nextConnect from "next-connect";
import { NextApiRequest, NextApiResponse } from "next";

const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

interface ExtendedRequest {
  db: Db;
  dbClient: MongoClient;
  query: any;
  body: any;
}

async function database(
  req: ExtendedRequest,
  res: NextApiResponse,
  next: () => any
) {
  if (!client.isConnected()) await client.connect();
  req.dbClient = client;
  req.db = client.db(process.env.MONGODB_DB);
  return next();
}

const middleware = nextConnect<NextApiRequest, NextApiResponse>();

middleware.use(database);

export default middleware;
