import { characterTypeDefs } from "./character.js";

const rootTypeDefs = `#graphql
  type Query
`;

export const typeDefs = [rootTypeDefs, characterTypeDefs];
