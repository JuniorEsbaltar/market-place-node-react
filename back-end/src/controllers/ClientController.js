const { Client } = require('../app/models')

module.exports = {
  async index(request, response) {
    const clients = await User.findAll()

    return response.json(clients)
  },

  async create(request, response) {
    const {name, phone, birth_date, status} = request.body
    
    const client = await Client.create({name, phone, birth_date, status})
    
    return response.json(client)
  },

}