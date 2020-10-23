import { IncomingMessage, ServerResponse } from "http";
import { Db } from "mongodb";
import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import Weights from "./weights";
import auth0 from "../../lib/auth0";

interface ExtendedRequest extends IncomingMessage {
  db: Db;
  query: any;
  body: any;
  cookies: {
    [key: string]: string;
  };
}

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req: ExtendedRequest, res: NextApiResponse) => {
  let doc: Weights[] = [];
  const { user } = await auth0.getSession(req);
  console.log("Chris " + user.sub);
  if (user) {
    doc = await req.db
      .collection("currentWeights")
      .find({ user: user.sub })
      .toArray();
  }
  res.json(doc);
});

handler.post(async (req: ExtendedRequest, res: NextApiResponse) => {
  let data = req.body;
  data = JSON.parse(data);

  let doc = await req.db
    .collection("currentWeights")
    .findOne({ _id: data._id });

  if (doc == null) {
    await req.db.collection("currentWeights").insertOne(data);
  } else {
    await req.db
      .collection("daily")
      .updateOne(
        { _id: data._id },
        { $set: { value: data.value } },
        { upsert: true }
      );
  }

  res.json({ message: "ok" });
});

export default (req: IncomingMessage, res: ServerResponse) =>
  handler.apply(req, res);
