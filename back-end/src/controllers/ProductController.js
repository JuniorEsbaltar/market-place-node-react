const { Product } = require('../app/models')

module.exports = {
  async index(request, response) {
    const product = await Product.findAll()

    return response.json(product)
  },

  async show(request, response) {
    const product = await Product.findAll({where: {status: 'active'}})

    return response.json(product)
  },

  async create(request, response) {
    const {name, price, status} = request.body

    const product = await Product.create({name, price, status})
    return response.json(product)
  },

  async update(request, response) {

    const {id, name, phone, birth_date, status} = request.body

    await Product.update(
      { name, phone, birth_date, status },
      { where: { id: id } })

    return response.status(200)
  }
  
}
