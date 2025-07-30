import { gql } from "graphql-tag";

export const characterTypeDefs = gql`
	type Character {
		id: ID!
		name: String!
		image: String

		alias: Alias
		appearance: Appearance
		background: Background
		biography: Biography
		publication: Publication
		attributes: Attributes
		connection: Connection
	}

	extend type Query {
		characters: [Character!]!
		character(id: ID!): Character
	}
`;
