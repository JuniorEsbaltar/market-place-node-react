const { Product } = require('../app/models')
const product_view = require('../views/product_view')
module.exports = {
  async index(request, response) {
    const product = await Product.findAll()
    return response.json(product_view.renderMany(product))
  },

  async show(request, response) {
    const product = await Product.findAll({where: {status: 'active'}})

    return response.json(product_view.renderMany(product))
  },

  async create(request, response) {
    const {name, price} = request.body
    const status = 'active'
    const product = await Product.create({name, price, status})
    return response.json(product)
  },

  async update(request, response) {
     const { id } = request.params
    
    const product = await Product.findByPk(id)
    product.status = await product.status == 'active' ? 'disable' : 'active';

    await Product.update(
      {status: product.status},
      { where: { id: id } })

    return response.status(200)
  }
}
