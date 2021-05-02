import { gql } from "@apollo/client";

export const ORDERS_QUERY = gql`
  query($username:String!){
    orders(filter: { ownerName: $username }) {
      _id
      totalPrice
      ownerName
      status
      timestamp
    }
    products(filter: { appearInOrder: { orderOwner: $username } }) {
      appearInOrder {
        _id
        orderOwner
        quantity
        mutiprice
      }
      appearInCart {
        cartOwner
        quantity
      }
      name
      price
    }
  }
`;
