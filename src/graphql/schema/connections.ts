import { gql } from "graphql-tag";

export const connectionsTypeDefs = gql`
	type Connection {
		id: ID!
        affiliations: [Affiliation!]!
        relatives: [Relative!]!
	}

    type Affiliation {
        id: ID!
        name: String
        affiliationType: String
    }

    type Relative {
        id: ID!
        name: String
        relationship: String
        relationshipType: String
        livingStatus: LIVINGSTATUS
    }
`;
