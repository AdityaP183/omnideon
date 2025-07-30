import { gql } from "graphql-tag";
import { mergeTypeDefs } from "@graphql-tools/merge";

import { aliasTypeDefs } from "./alias.js";
import { appearanceTypeDefs } from "./appearance.js";
import { backgroundTypeDefs } from "./background.js";
import { biographyTypeDefs } from "./biography.js";
import { characterTypeDefs } from "./character.js";
import { connectionsTypeDefs } from "./connections.js";
import { publicationTypeDefs } from "./publication.js";
import { attributesTypeDefs } from "./attributes.js";
import enumsTypeDefs from "./enums.js";

const rootTypeDefs = gql`
	type Query
`;

export const typeDefs = mergeTypeDefs([
	rootTypeDefs,
	enumsTypeDefs,
	characterTypeDefs,
	connectionsTypeDefs,
	aliasTypeDefs,
	appearanceTypeDefs,
	backgroundTypeDefs,
	biographyTypeDefs,
	publicationTypeDefs,
	attributesTypeDefs,
]);
