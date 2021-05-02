import {UserTC, CartTC} from '../../models'
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
