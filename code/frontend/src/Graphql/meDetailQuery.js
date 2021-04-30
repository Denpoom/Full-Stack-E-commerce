import { gql } from "@apollo/client";

export const ME_DETAIL_QUERY = gql`
  query {
    me {
      _id
      role
      username
      fullname
      email
      tel
      ... on Admin {
        password
      }      
      ... on Customer {
        password
      }
    }
  }
`;
