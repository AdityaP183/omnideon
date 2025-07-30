import { gql } from "graphql-tag";

const enumsTypeDefs = gql`
	enum PUBLISHER {
		Marvel
		DC
		Image
	}

	enum GENDER {
		Male
		Female
		Others
	}

    enum LIVINGSTATUS{
        Dead
        Alive
        Unknown
    }
`;

export default enumsTypeDefs;
