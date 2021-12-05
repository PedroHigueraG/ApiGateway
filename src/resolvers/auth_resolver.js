const authResolver = {
    Query: {
        userDetailById: (_, { userId }, { dataSources, userIdToken }) => {
            if (userId == userIdToken)
                return dataSources.authAPI.getUser(userId)
            else
                return null
        },
    },
    Mutation: {
        signUpUser: async(_, { userInput }, { dataSources }) => {
            const UserAccountInput = {
                username: userInput.username,
                password: userInput.password,
                name: userInput.name,
                lastName:userInput.lastName,
                email: userInput.email,
                tel:userInput.tel,
                location:userInput.location,
                address:userInput.address,
                gender:userInput.gender,
                
            }
            return await dataSources.authAPI.createUser(UserAccountInput);
        },
        logIn: (_, { credentials }, { dataSources }) => 
            dataSources.authAPI.authRequest(credentials),
        
        refreshToken: (_, { refresh }, { dataSources }) =>
            dataSources.authAPI.refreshToken(refresh),

    }
};
module.exports = authResolver;
