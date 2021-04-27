import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;

const PaymentSchema = new Schema({
  total: { type: String, require: true, default: "0" },
  timestamp: { type: Date, default: Date.now },
  ownerId: {
    type: String,
    require: true,
    index: true,
    ref: "User",
  },
  orderId: {
    type: String,
    require: true,
    index: true,
    ref: "Order",
  },
});
const baseOptions = {
  inputType: {
    removeFields: ["timestamp"],
  },
};
export const PaymentModel = mongoose.model("Payment", PaymentSchema);

export const PaymentTC = composeWithMongoose(PaymentModel, baseOptions);

export default PaymentModel;
