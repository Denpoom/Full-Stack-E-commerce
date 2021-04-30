import { OrderTC, ProductTC, UserTC } from "../../models";

OrderTC.addRelation("owner", {
  resolver: () => UserTC.getResolver("findById"),
  prepareArgs: {
    _id: (source) => source.ownerId,
  },
  projection: { ownerId: 1 },
});
OrderTC.addRelation("products", {
  resolver: () => ProductTC.getResolver("findMany"),
  prepareArgs: {
    filter: (source) => ({ appearInOrder: source._id }),
  },
  projection: { _id: 1 },
});
