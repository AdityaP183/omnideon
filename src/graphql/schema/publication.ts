import { gql } from "graphql-tag";

export const publicationTypeDefs = gql`
	type Publication {
		id: ID!
		publisher: PUBLISHER
		debutYear: String
		debutMonth: String
		firstAppearance: String
		creators: [Creator!]!
	}

	type Creator {
		name: String
		image: String
	}
`;
