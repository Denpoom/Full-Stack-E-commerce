import mongoose from 'mongoose'
import bcrypt from 'mongoose-bcrypt'
import { composeWithMongoose } from 'graphql-compose-mongoose'

const { Schema } = mongoose

const UserSchema = new Schema({
  username: { type: String, required: true, index: true },
  password: { type: String, require: true, bcrypt: true },
  name: { type: String},
  surname: { type: String},
  email: {type: String},
  tel: {type: String},
})

UserSchema.plugin(bcrypt)

export const UserModel = mongoose.model('User', UserSchema)

export const UserTC = composeWithMongoose(UserModel).removeField('password')

export default UserModel
