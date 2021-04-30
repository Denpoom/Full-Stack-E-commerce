import { gql } from "@apollo/client";

export const PRODUCTS_QUERY = gql`
  query {
    products(sort: NAME_ASC) {
      _id
      name
      detail {
        monitor
        storage
        cpu
        gpu
        ram
        os
      }
      amount
      price
      url
    }
  }
`;
export const RECOMMEND_PRODUCTS_QUERY = gql`
  query {
    products(filter: { isRecommended: true }, sort: NAME_ASC) {
      _id
      name
      detail {
        monitor
        storage
        cpu
        gpu
        ram
        os
      }
      isRecommended
      price
      url
    }
  }
`;
export const PRODUCT_BYID_QUERY = gql`
  query($id: MongoID!) {
    productById(_id: $id) {
      _id
      name
      detail {
        monitor
        storage
        cpu
        gpu
        ram
        os
      }
      isRecommended
      price
      url
      amount
      appearInCart
    }
    me{
      cart {
        _id
      }
    }
  }
`;
