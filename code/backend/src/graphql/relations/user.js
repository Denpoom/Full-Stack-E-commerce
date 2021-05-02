import {UserTC, CartTC, CheckoutTC} from '../../models'
UserTC.addRelation(
    'cart',
    {
        resolver: () => CartTC.getResolver('findOne'),
        prepareArgs: {
            filter: (source) => ({ ownerName: source.username }),
        },
        projection: { username: 1 },
    },
)
UserTC.addRelation(
    'checkout',
    {
        resolver: () => CheckoutTC.getResolver('findOne'),
        prepareArgs: {
            filter: (source) => ({ ownerName: source.username }),
        },
        projection: { username: 1 },
    },
)
