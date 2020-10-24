import { ObjectID } from "mongodb";

export interface Exercise {
  _id: ObjectID;
  user: string;
  property: string;
  label: string;
  value: number;
}

const Exercises: Exercise[] = [
  {
    _id: new ObjectID(),
    user: "",
    property: "squat",
    label: "Squat",
    value: 0,
  },
  {
    _id: new ObjectID(),
    user: "",
    property: "stiffLegDeads",
    label: "Stiff Leg Deads",
    value: 0,
  },
  {
    _id: new ObjectID(),
    user: "",
    property: "benchpress",
    label: "Bench Press",
    value: 0,
  },
  {
    _id: new ObjectID(),
    user: "",
    property: "dips",
    label: "Dips",
    value: 0,
  },
  {
    _id: new ObjectID(),
    user: "",
    property: "rows",
    label: "Rows",
    value: 0,
  },
  {
    _id: new ObjectID(),
    user: "",
    property: "shrugs",
    label: "Shrugs",
    value: 0,
  },
  {
    _id: new ObjectID(),
    user: "",
    property: "shoulderpress",
    label: "Shoulder Press",
    value: 0,
  },
  {
    _id: new ObjectID(),
    user: "",
    property: "lateralraise",
    label: "Lateral Raise",
    value: 0,
  },
  {
    _id: new ObjectID(),
    user: "",
    property: "reardelt",
    label: "Rear Delt",
    value: 0,
  },
  {
    _id: new ObjectID(),
    user: "",
    property: "dbcurls",
    label: "DB Curls",
    value: 0,
  },
  {
    _id: new ObjectID(),
    user: "",
    property: "triextensions",
    label: "Tri Extensions",
    value: 0,
  },
  {
    _id: new ObjectID(),
    user: "",
    property: "calfraise",
    label: "Calf Raise",
    value: 0,
  },
  {
    _id: new ObjectID(),
    user: "",
    property: "abs",
    label: "Abs",
    value: 0,
  },
];

export default Exercises;
