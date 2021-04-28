import mongoose from 'mongoose'
import { composeWithMongoose } from 'graphql-compose-mongoose'

const { Schema } = mongoose
const enumProductBrand = {
    ACER:'ACER',
    ASUS:'ASUS',
    HP:'HP',
    LENOVO:'LENOVO',
    DELL:'DELL',
    Fuji:'FUJI',
    MSI:'MSI',
    HUAWEI:'HUAWEI',
    MICROSOFT: 'MICROSOFT',
    APPLE:'APPLE'
  }
  const enumProductOS = {
    WINDOW:'Window',
    LINUX:'Linux',
    MACOS:'MacOS',
  }
const ProductSchema = new Schema({
    name: { type: String, required: true, index: true },
    timestamp: {type: Date, default: Date.now},
    detail:{
        monitor: {type: String},
        cpu: {type: String},
        gpu: {type: String},
        storage: {type: String},
        ram: {type: String},
        os: {type: String,
            index:true,
            enum: enumProductOS,
        },
        brand:{
            type: String,
            index: true,
            enum: enumProductBrand,
        }
    },
    price: {type: String, default: '0.00'},
    url:{
        type: String, require:true
    },
    isRecommended:{
        type: Boolean, default:false
    },
    appearInOrder: [{
        type: String,
        index: true,
        ref: 'Order',
    }],
    amount: {
        type: String,
        index: true,
        default: "0",
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