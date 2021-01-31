const { Client } = require('../app/models')
const client_view = require('../views/client_view')
module.exports = {
  async index(request, response) {
    const clients = await Client.findAll()

    return response.json(client_view.renderMany(clients))
  },

  async show(request, response) {
    console.log("entrou")
    const clients = await Client.findAll({where: {status: 'active'}})

    return response.json(client_view.renderMany(clients))
  },

  async create(request, response) {
    try{
      const {name, phone, birth_date} = request.body
      const status = 'active'
      const client = await Client.create({name, phone, birth_date, status})
      return response.json(client)
    }catch {
      return response.status(500).json({error:'nao foi possivel cadastrar'})
    }
    
  },

  async update(request, response) {
    const { id } = request.params
    
    const client = await Client.findByPk(id)
    client.status = await client.status == 'active' ? 'disable' : 'active';

    await Client.update(
      {status: client.status},
      { where: { id: id } })

    return response.status(200)
  }
}