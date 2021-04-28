import { gql } from "@apollo/client"

export const USER_QUERY = gql`
query {
    customers {
        _id
        role
        username
        password
    }
}
`