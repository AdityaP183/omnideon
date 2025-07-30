import { gql } from "graphql-tag";

export const attributesTypeDefs = gql`
	type Attributes {
		id: ID!
		powers: [Power!]!
		abilities: [Ability!]!
		weaknesses: [Weakness!]!
		equipment: [Equipment!]!
	}

	type Power {
		name: String
		description: String
	}

	type Ability {
		name: String
		description: String
	}

	type Weakness {
		name: String
		description: String
	}

	type Equipment {
		name: String
		description: String
	}
`;
