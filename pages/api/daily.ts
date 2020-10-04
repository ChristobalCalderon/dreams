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
      text: "Squat 1x10",
      isChecked: false,
      date: date,
    },
    {
      _id: new ObjectID(),
      type: 2,
      text: "Stiff Leg Deads 2x10",
      isChecked: false,
      date: date,
    },
    {
      _id: new ObjectID(),
      type: 3,
      text: "Incline Bench 2x10",
      isChecked: false,
      date: date,
    },
    {
      _id: new ObjectID(),
      type: 4,
      text: "Dips 1x10",
      isChecked: false,
      date: date,
    },
    {
      _id: new ObjectID(),
      type: 5,
      text: "Chins 2x10",
      isChecked: false,
      date: date,
    },
    {
      _id: new ObjectID(),
      type: 6,
      text: "Rows 2x10",
      isChecked: false,
      date: date,
    },
    {
      _id: new ObjectID(),
      type: 7,
      text: "Shrugs 1x10",
      isChecked: false,
      date: date,
    },
    {
      _id: new ObjectID(),
      type: 8,
      text: "Shoulder Press 1x10",
      isChecked: false,
      date: date,
    },
    {
      _id: new ObjectID(),
      type: 9,
      text: "Lateral Raise 1x10",
      isChecked: false,
      date: date,
    },
    {
      _id: new ObjectID(),
      type: 10,
      text: "Rear Delt 1x10",
      isChecked: false,
      date: date,
    },
    {
      _id: new ObjectID(),
      type: 11,
      text: "DB Curls 2x10",
      isChecked: false,
      date: date,
    },
    {
      _id: new ObjectID(),
      type: 12,
      text: "Tri Extensions 2x10",
      isChecked: false,
      date: date,
    },
    {
      _id: new ObjectID(),
      type: 13,
      text: "Calf Raise 2x10",
      isChecked: false,
      date: date,
    },
    {
      _id: new ObjectID(),
      type: 14,
      text: "Abs 2x10",
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
