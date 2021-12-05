const petResolver = require('./pet_resolver');
const authResolver = require('./auth_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(petResolver, authResolver);

module.exports = resolvers;