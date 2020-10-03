import { ObjectID } from "mongodb";

export default interface Activity {
  _id: ObjectID;
  type: number;
  text: string;
  isChecked: boolean;
  date: Date;
}
