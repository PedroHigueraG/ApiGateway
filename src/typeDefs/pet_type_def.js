const { gql } = require('apollo-server');

const accountTypeDefs = gql `
    type Pet{
        id: String!
        imgBin64: String!
        descripcion: String!
        fecha: String!
        ciudad: String!
        telefono: Int!
    }
    input PetInput{
        id: String!
        imgBin64: String!
        descripcion: String!
        fecha: String!
        ciudad: String!
        telefono: Int!
    }
    type Mutation{
        createPet(input: PetInput): Pet
    }
    type Query {
        accountByUsername(id: String!): Pet
    }
`;
module.exports = accountTypeDefs;