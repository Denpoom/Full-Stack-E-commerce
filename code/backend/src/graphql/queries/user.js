import { UserTC, CustomerTC} from '../../models'

export const userById = UserTC.getResolver('findById')
export const customers = CustomerTC.getResolver('findMany')