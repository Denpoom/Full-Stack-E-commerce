import { gql } from '@apollo/client'

export const PRODUCTS_QUERY = gql`
query{
  products(sort:NAME_ASC){
    _id
    name
    detail{
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
`
export const RECOMMEND_PRODUCTS_QUERY = gql`
query{
  products(filter:{isRecommended:true}, sort:NAME_ASC){
    _id
    name
    detail{
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
`