import { CheckoutTC } from '../../models'

export const checkouts = CheckoutTC.getResolver('findMany')
export const checkoutById = CheckoutTC.getResolver('findById')
