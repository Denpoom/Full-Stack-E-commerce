import mongoose from 'mongoose'
import { composeWithMongoose } from 'graphql-compose-mongoose'

const { Schema } = mongoose
const ProductSchema = new Schema({
    name: { type: String, required: true, index: true },
    timestamp: {type: Date, default: Date.now},
    detail:[{
        monitor: {type: String},
        cpu: {type: String},
        gpu: {type: String},
        storage: {type: String},
        ram: {type: String},
        op: {type: String},
    }],
    price: {type: String, default: '0.00'},
    url:{
        type: String, require:true
    },
    count:{
        type: String
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