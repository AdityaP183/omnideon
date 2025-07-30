import { gql } from "graphql-tag";

export const aliasTypeDefs = gql`
    type Alias {
        id: ID!
        name: String
        aliasType: String
        isCurrent: Boolean
    }
`;
