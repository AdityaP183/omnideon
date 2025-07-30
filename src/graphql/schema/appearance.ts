import { gql } from "graphql-tag";

export const appearanceTypeDefs = gql`
	type Appearance {
		id: ID!
		gender: GENDER
		race: String
		height: Height
		weight: Weight
		eyeColor: String
		hairColor: String
	}

	type Height {
		inInches: String
		inCm: String
	}

	type Weight {
		inKg: String
		inPounds: String
	}
`;
