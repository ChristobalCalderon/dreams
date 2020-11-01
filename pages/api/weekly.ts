import { IncomingMessage, ServerResponse } from "http";
import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import Activity from "./activity";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req: any, res: any) => {
  const { startDate, endDate } = req.query;

  let doc: Activity[] = [];

  if (startDate && endDate) {
    doc = await req.db
      .collection("daily")
      .find({ date: { $gte: startDate, $lte: endDate } })
      .toArray();
  }

  res.json(doc);
});

export default (req: IncomingMessage, res: ServerResponse) =>
  handler.apply(req, res);
