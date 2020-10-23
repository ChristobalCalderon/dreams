import { ObjectID } from "mongodb";

export default interface WeightsModel {
  _id: ObjectID;
  user: string;
  property: string;
  label: string;
  value: number;
}
