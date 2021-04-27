import { OrderTC } from "../../models";

export const orderById = OrderTC.getResolver("findById");
export const orders = OrderTC.getResolver("findMany");
