import {UserTC, CartTC} from '../../models'
UserTC.addRelation(
    'cart',
    {
        resolver: () => CartTC.getResolver('findById'),
        prepareArgs: {
            ownerId: (source) => source._id,
        },
        projection: { _id: 1 },
    },
)
