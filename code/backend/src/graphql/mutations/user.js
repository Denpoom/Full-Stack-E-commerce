import { ValidationError } from 'apollo-server-express'
import { schemaComposer } from 'graphql-compose'

import { UserTC, UserModel} from '../../models'

export const createUser = UserTC.getResolver('createOne')

const LoginPayload = schemaComposer.createObjectTC({
    name: 'LoginPayload',
    fields: {
      token: 'String',
      user: UserTC.getType(),
    },
  })
export const login = schemaComposer.createResolver({
    name: 'login',
    args: {
      username: 'String!',
      password: 'String!',
    },
    type: LoginPayload,
    resolve: async ({ args }) => {
      const { username, password } = args
      const user = await UserModel.findOne({ username })
      if (!user) {
        throw new ValidationError(`Username ${username} not found`)
      }
      const valid = await user.verifyPassword(password)
      if (!valid) {
        throw new ValidationError('Incorrect password')
      }
    },
  })