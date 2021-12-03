const { gql } = require('apollo-server');

const authTypeDefs = gql`
    type Tokens {
        refresh: String!
        access: String!
    }
    type Access {
        access: String!
    }
    input CredentialsInput {
        username: String!
        password: String!
    }
    input SignUpInput {
        id: Int!
        username: String!
        password: String!
        name: String!
        lastName: String!
        email: String!
        tel: Int!
        location: String!
        address: String!
        isSuscribed: Boolean!
        gender: String!
    }
    type UserDetail {
        id: Int!
        username: String!
        password: String!
        name: String!
        email: String!
        tel: Int!
        location: String!
        address: String!
        isSuscribed: Boolean!
        gender: String!
    }
    type Mutation {
        signUpUser(userInput :SignUpInput): Tokens!
        logIn(credentials: CredentialsInput!): Tokens!
        refreshToken(refresh: String!): Access!
    }
    type Query {
        userDetailById(userId: Int!): UserDetail!
    }
`;
 
module.exports = authTypeDefs;
