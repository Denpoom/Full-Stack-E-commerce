import mongoose from 'mongoose'
import { composeWithMongoose } from 'graphql-compose-mongoose'

const { Schema } = mongoose

const OrderSchema = new Schema({
    count:{type:String, require:true, default:'0'},
    ownerId: {
        type: String,
        require: true,
        index: true,
        ref: 'User',
      },
})
export const OrderModel = mongoose.model('Order', OrderSchema)

export const OrderTC = composeWithMongoose(OrderModel)

export default OrderModel