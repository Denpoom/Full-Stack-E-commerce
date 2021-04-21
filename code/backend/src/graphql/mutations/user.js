import { ValidationError } from 'apollo-server-express'
import { schemaComposer } from 'graphql-compose'

import { UserTC} from '../../models'

export const createUser = UserTC.getResolver('createOne')