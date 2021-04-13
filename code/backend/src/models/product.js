import mongoose from 'mongoose'
import { composeWithMongoose } from 'graphql-compose-mongoose'

const { Schema } = mongoose
const ProductSchema = new Schema({
    name: { type: String, required: true, index: true },
    detail: {type: String, required:true},
    timestamp: {type: Date, default: Date.now},
    price: {type: String, default: '0.00'},
    type: {
        type: String,
        require: true,
        index: true,
    },
    url:{
        type: String, require:true
    },
    count:{
        type: String, require:true
    },
    orderId: {
        type: String,
        index: true,
        ref: 'Order',
    },
})
const baseOptions = {
    inputType: {
      removeFields: ['timestamp'],
    },
  }
export const ProductModel = mongoose.model('Product', ProductSchema)

export const ProductTC = composeWithMongoose(ProductModel, baseOptions)

export default ProductModel