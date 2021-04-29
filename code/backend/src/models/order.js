import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const OrderSchema = new Schema({
  count: { type: String, require: true, default: "0" },
  name: { type: String, require: true, index: true },
  status: { type: String },
  ownerId: {
    type: String,
    require: true,
    index: true,
    ref: "User",
  },
  timestamp: { type: Date, default: Date.now },
});
const baseOptions = {
  inputType: {
    removeFields: ["timestamp"],
  },
};
export const OrderModel = mongoose.model("Order", OrderSchema);

export const OrderTC = composeWithMongoose(OrderModel, baseOptions);

export default OrderModel;
