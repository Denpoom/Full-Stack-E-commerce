import { CheckoutTC, UserTC} from '../../models'

CheckoutTC.addRelation(
    'owner',
    {
      resolver: () => UserTC.getResolver('findById'),
      prepareArgs: {
        _id: (source) => source.ownerId,
      },
      projection: { ownerId: 1 },
    },
  )
