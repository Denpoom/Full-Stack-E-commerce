import { gql } from '@apollo/client'

export const PRODUCTS_QUERY = gql`
query{
  products(sort:NAME_ASC){
    name
    detail
  }
}
`