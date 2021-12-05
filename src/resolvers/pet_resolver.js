const petResolver={
    Query:{
        petById: async(_, { id }, { dataSources }) => {
            return dataSources.petsAPI.getPet(id)
        },
    
        pets:async(_,__,{ dataSources }) => {
            return dataSources.petsAPI.getPets()
        }
    },    

    Mutation:{
        createPet: async(_, { input }, { dataSources }) => {
            const inputPet={
                id: input.id,
                imgBin64: input.imgBin64,
                descripcion: input.descripcion,
                fecha: input.fecha,
                ciudad: input.ciudad,
                telefono: input.telefono,
            }
            return dataSources.petsAPI.createPet(inputPet);
        }
        
    }

};
module.exports = petResolver;