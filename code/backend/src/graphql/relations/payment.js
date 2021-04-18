import moment from 'moment'
import { PaymentTC, OrderTC, UserTC } from '../../models'

PaymentTC.addFields({
    timestamp: {
      type: 'String',
      resolve: (source) => moment(source.timestamp).fromNow(),
      projection: { timestamp: 1 },
    },
  })
PaymentTC.addRelation(
    'owner',
    {
        resolver: () => UserTC.getResolver('findById'),
        prepareArgs: {
        _id: (source) => source.ownerId,
        },
        projection: { ownerId: 1 },
    }
)
PaymentTC.addRelation(
    'order',
    {
        resolver: () => OrderTC.getResolver('findById'),
        prepareArgs: {
        _id: (source) => source.orderId,
        },
        projection: { orderId: 1 },
    }
)