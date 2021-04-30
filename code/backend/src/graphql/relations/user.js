import {UserTC, CartTC} from '../../models'
UserTC.addRelation(
    'cart',
    {
        resolver: () => CartTC.getResolver('findOne'),
        prepareArgs: {
            filter: (source) => ({ ownerId: source._id }),
        },
        projection: { _id: 1 },
    },
)
