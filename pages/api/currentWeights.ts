import { IncomingMessage, ServerResponse } from "http";
import { Db } from "mongodb";
import { NextApiResponse } from "next";
import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import Weights from "./weights";
import auth0 from "../../lib/auth0";
import Exercises from "../../components/exercises/exercisesModel";

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
  let exercises = Exercises;
  const { user } = await auth0.getSession(req);

  if (user) {
    exercises.forEach((element) => {
      element.user = user.sub;
    });

    doc = await req.db
      .collection("currentWeights")
      .find({ user: user.sub })
      .toArray();

    if (doc) {
      doc.forEach((element) => {
        var index = exercises.findIndex((x) => x.property == element.property);
        exercises[index] = element;
      });
    }
  }

  res.json(exercises);
});

handler.post(async (req: ExtendedRequest, res: NextApiResponse) => {
  let data = req.body;
  data = JSON.parse(data);

  let doc = await req.db
    .collection("currentWeights")
    .findOne({ _id: data._id });

  console.log("Chris " + data._id);

  if (doc == null) {
    await req.db.collection("currentWeights").insertOne(data);
  } else {
    await req.db
      .collection("currentWeights")
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
