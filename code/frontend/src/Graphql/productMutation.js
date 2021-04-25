import { gql } from '@apollo/client'

export const CREATE_PRODUCT_MUTATION = gql`
mutation($record:CreateOneProductInput!){
    createProduct(record:$record){
      record{
      name
      detail{
        monitor
        storage
        cpu
        gpu
        ram
        os
        brand
      }
      price
      url
      amount
      }
    }
  }
`