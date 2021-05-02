import { UserTC, CartTC, ProductTC } from "../../models";
CartTC.addRelation("owner", {
  resolver: () => UserTC.getResolver("findOne"),
  prepareArgs: {
    filter: (source) => ({ username: source.ownerName }),
  },
  projection: { ownerName: 1 },
});
CartTC.addRelation("products", {
  resolver: () => ProductTC.getResolver("findMany"),
  index: true,
  prepareArgs: {
    filter: (source) => ({ appearInCart: source._id }),
  },
  projection: { _id: 1 },
});
