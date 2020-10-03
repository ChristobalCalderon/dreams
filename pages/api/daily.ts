import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import { ObjectID } from "mongodb";
import Activity from "./activity";

const handler = nextConnect();

handler.use(middleware);

handler.get(async (req: any, res: any) => {
  const { date } = req.query;

  const dataModel: Activity[] = [
    {
      _id: new ObjectID(),
      type: 1,
      text: "8 glasses Water",
      isChecked: false,
      date: date,
    },
    {
      _id: new ObjectID(),
      type: 2,
      text: "Gym",
      isChecked: false,
      date: date,
    },
    {
      _id: new ObjectID(),
      type: 3,
      text: "Daily movement",
      isChecked: false,
      date: date,
    },
    {
      _id: new ObjectID(),
      type: 4,
      text: "3 meals + snack",
      isChecked: false,
      date: date,
    },
    {
      _id: new ObjectID(),
      type: 5,
      text: "Vitamins",
      isChecked: false,
      date: date,
    },
  ];

  let doc: Activity[] = [];

  if (date) {
    console.log("lt: ", new Date(new Date(date).setHours(-2)));
    console.log("gte: ", new Date(new Date(date).setHours(24)));

    doc = await req.db
      .collection("daily")
      .find({ date: new Date(date) })
      .toArray();
  }

  if (doc.length > 0) {
    for (let index = 0; index < dataModel.length; index++) {
      const found = doc.find((element: Activity) => {
        return element.type === dataModel[index].type;
      });

      if (found) {
        dataModel[index].isChecked = found.isChecked;
        dataModel[index]._id = found._id;
      }
    }
  }

  res.json(dataModel);
});

handler.post(async (req: any, res: any) => {
  let data = req.body;
  data = JSON.parse(data);
  data.date = new Date(data.date);

  let doc = await req.db.collection("daily").findOne({ _id: data._id });

  if (doc == null) {
    await req.db.collection("daily").insertOne(data);
  } else {
    await req.db
      .collection("daily")
      .updateOne(
        { _id: data._id },
        { $set: { isChecked: data.isChecked } },
        { upsert: true }
      );
  }

  res.json({ message: "ok" });
});

export default (req, res) => handler.apply(req, res);
