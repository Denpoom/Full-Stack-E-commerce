import { gql } from '@apollo/client'

export const ORDERS_QUERY = gql`
query{
    orders{
      name
      status
      timestamp
      _id
    }
  }
`