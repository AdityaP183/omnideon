import {gql} from "graphql-tag"

export const backgroundTypeDefs = gql`
    type Background {
        id: ID!
        origin: String
        livingStatus: LIVINGSTATUS
        placesOfBirth: [String!]!
        causeOfDeath: CauseOfDeath
    }

    type CauseOfDeath {
        cause: String
        killer: String
        extraInfo: String
    }
`
