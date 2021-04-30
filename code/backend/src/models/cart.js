import { composeWithMongoose } from 'graphql-compose-mongoose'
import mongoose from 'mongoose'
import ProductModel from '../models/product'



const { Schema } = mongoose
const CartSchema = new Schema({
    count:{ type: Number, require:true, default:0 },
    price:{type:String, require:true, default:"0.00"},
    name:{type:String, require:true},
    ownerId: {
        type: String,
        require: true,
        index: true,
        ref: 'User',
    },
    productCart: [{
        require: false,
        ref: 'Product',
    }]
    
})

export const CartModel = mongoose.model('Cart', CartSchema)

export const CartTC = composeWithMongoose(CartModel)

export default CartModel