export const characterTypeDefs = `#graphql
  type Character {
    id: ID!
    name: String!
    alias: String
    alignment: Alignment
    powers: [String!]!
    publisher: String!
    createdBy: String
    debutYear: Int
    imageUrl: String
  }

  enum Alignment {
    HERO
    VILLAIN
    NEUTRAL
    ANTI_HERO
  }

  extend type Query {
    characters: [Character!]!
    character(id: ID!): Character
  }
`;
