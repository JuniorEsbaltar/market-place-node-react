const { Product } = require('../app/models')

module.exports = {
  async index(request, response) {
    const product = await Product.findAll()

    return response.json(product)
  },

  async create(request, response) {
    const {name, price, status} = request.body

    const product = await Product.create({name, price, status})
    return response.json(product)
  },

  async delete(request, response) {
    const {id} = await request.params

    const a = await Client.destroy({
      where: {id: id}
    })

    return response.json(a)
  },

  async update(request, response) {
    const {id, name, phone, birth_date, status} = request.body

    const updateProduct = await Product.update(
      { name, phone, birth_date, status },
      { where: { id: id } }
      )

    return response.json(updatedClient)
  }

}