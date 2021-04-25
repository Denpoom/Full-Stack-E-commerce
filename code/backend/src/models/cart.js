import { composeWithMongoose } from 'graphql-compose-mongoose'
import mongoose from 'mongoose'


const { Schema } = mongoose
const CartSchema = new Schema({
    count:{ type: Number, require:true, default:0 },
    ownerId: {
        type: String,
        require: true,
        index: true,
        ref: 'User',
    },
    productCart: [],
    
})

export const CartModel = mongoose.model('Cart', CartSchema)

export const CartTC = composeWithMongoose(CartModel)

export default CartModel