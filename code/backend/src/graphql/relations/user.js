import { CartTC, PostTC, UserTC } from '../../models'


UserTC.addRelation(
    'carts',
    {
        resolver: () => CartTC.getResolver('findById'),
        prepareArgs: {
            _id:(source) => source.cartId
        }
    }
)