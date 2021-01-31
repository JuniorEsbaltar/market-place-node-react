const { Client } = require('../app/models')

module.exports = {
  async index(request, response) {
    const clients = await Client.findAll()

    return response.json(clients)
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

  async delete(request, response) {
    const {client_id} = await request.params

    const a = await Client.destroy({
      where: {id: client_id}
    })

    return response.json(a)
  },
  async update(request, response) {
    const {id, name, phone, birth_date, status} = request.body

    const updatedClient = await Client.update(
      { name, phone, birth_date, status },
      { where: { id: id } }
      )

    return response.json(updatedClient)
  }

}