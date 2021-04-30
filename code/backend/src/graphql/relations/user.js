import {CustomerTC, CartTC} from '../../models'
CustomerTC.addRelation(
    'cart',
    {
        resolver: () => CartTC.getResolver('findById'),
        prepareArgs: {
            ownerId: (source) => source._id,
        },
        projection: { _id: 1 },
    },
)
