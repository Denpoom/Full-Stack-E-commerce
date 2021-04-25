import { gql } from '@apollo/client'

export const CART_QUERY = gql` 
mutation ($record: CreateOneCartInput!) {
    createCart(record: $record){
        recordId
    }
  }
`