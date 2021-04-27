import mongoose from "mongoose";
import { composeWithMongoose } from "graphql-compose-mongoose";

const { Schema } = mongoose;
const CheckoutSchema = new Schema({
  name: { type: String, require: true },
  number: { type: String, require: true },
  ownerId: {
    type: String,
    require: true,
    index: true,
    ref: "User",
  },
});
export const CheckoutModel = mongoose.model("Checkout", CheckoutSchema);

export const CheckoutTC = composeWithMongoose(CheckoutModel);

export default CheckoutModel;
