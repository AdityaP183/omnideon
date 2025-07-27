import { characterResolvers } from './character.js';

export const resolvers = {
  Query: {
    ...characterResolvers.Query,
  },
};
