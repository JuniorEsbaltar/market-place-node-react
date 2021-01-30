const db = require("../app/models")
const {Product} = require("../app/models/")

module.exports = {

  async index(request, response) {
    const orders = await db.Order.findAll({include: {association: 'clients'}})
    
    return response.json(orders)
  },

  async create(request, response) {
    const { client_id } = request.params;
    const { products} = request.body
    
    const client = await db.Client.findByPk(client_id)
    
    if(!client) {
      return response.status(400).json({error: "Client not found"})
    }

    const amount_price = await products
      .reduce((accumullator, product) => { 
        return accumullator + product.price
      }, 0)

    const date_order = new Date()
    const order_number = (date_order.getTime() + client_id)

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
