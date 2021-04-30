import { UserTC, ProductTC } from "../../models";
import { CartTC } from "../../models/cart";


CartTC.addRelation(
    'owner',
    {
        resolver: () => UserTC.getResolver('findById'),
        prepareArgs: {
            _id: (source) => source.ownerId,
        },
        projection: { ownerId: 1 },
    },
)

CartTC.addRelation( "products", {
  resolver: () => ProductTC.getResolver("findMany"),
  prepareArgs: {
    filter: (source) => ({ cartId: source._id }),
  },
  projection: { _id: 1 },
})