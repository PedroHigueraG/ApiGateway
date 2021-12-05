const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class PetsAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = serverConfig.pets_api_url;
    }
    async createPet(pet) {
        pet = new Object(JSON.parse(JSON.stringify(pet)));
        return await this.post(`/pets/`, pet);
    }
    async getPets() {
        return await this.get(`/pets/`);
    }
    async getPet(id) {
        return await this.get(`/pets/${id}/`);
    }
}
module.exports = PetsAPI;