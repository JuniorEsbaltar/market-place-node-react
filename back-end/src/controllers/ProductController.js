const { Product } = require('../app/models')

module.exports = {
  async index(request, response) {
    const product = await Product.findAll()
    console.log(product)
    return response.json(product)
  },

  async create(request, response) {
    const {name, price, status} = request.body
    console.log(typeof price)
    const product = await Product.create({name, price, status})
    
    return response.json(product)
  },

}