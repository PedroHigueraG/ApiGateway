const { gql } = require('apollo-server');

const petTypeDefs = gql `
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
        petById(id: String!): Pet
        pets: [Pet!]! 
    }
`;
module.exports = petTypeDefs;