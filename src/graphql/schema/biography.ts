import { gql } from "graphql-tag";

export const biographyTypeDefs = gql`
	type Biography {
		id: ID!
		identity: String
		citizenship: String
		education: String
		occupations: [String!]!
		baseOfOperations: [BaseOfOperation!]!
	}

    type BaseOfOperation {
        location: String
        isCurrent: Boolean
    }
`;
