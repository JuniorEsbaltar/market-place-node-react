const db = require("../app/models")
const {Product} = require("../app/models/")

require('sequelize')
module.exports = {
  async index(request, response) {
    const { client_id } = request.params

    const client = await db.Order.findAll({
      where: {client_id: client_id}
    })

    return response.json(client)
  },

  async create(request, response) {
    const { client_id } = request.params;
    const { order_number, products} = request.body
    
    const client = await db.Client.findByPk(client_id)
    
    if(!client) {
      return response.status(400).json({error: "Client not found"})
    }

    await products.reduce((accumullator, amount_price) => { accumullator + amount_price})
    
    const date_order = new Date()

    const order = await db.Order.create({
      amount_price, 
      order_number, 
      date_order,
      client_id
    })
    for(const i in products) {
      const product = await Product.findByPk(products[i].id)
      await order.addProduct(product)
    }
        
    return response.json(order)
  },

  async delete(request, response) {
    const {id} = await request.params

    const a = await Client.destroy({
    where: {id: id}
    })

    return response.json(a)
  }
  

}