const db = require("../app/models")
const {Product} = require("../app/models/")
const order_view = require("../views/order_view")
const order_products_view = require("../views/order_products_view")

module.exports = {

  async index(request, response) {
    const orders = await db.Order.findAll({include: {association: 'clients'}})
    
    return response.json(order_view.renderMany(orders))
  },
  async indexById(request, response) {
    const { id } = request.params

    const order = await db.Order.findByPk(id, {include: {association: 'products'}})
    
    return response.json(order_products_view.render(order))
  },

  async create(request, response) {
    console.log("entrou")
    const { client_id } = request.params;
    const { products } = request.body
    const status = 'realizado'
    const client = await db.Client.findByPk(client_id)
    
    if(!client) {
      return response.status(400).json( {error: "Client not found"} )
    }

    const amount_price = await products
      .reduce((accumullator, product) => {
        return accumullator + Number(product.price)
      }, 0)

    const date_order = new Date()
    const order_number = (date_order.getTime() + client_id)

    const order = await db.Order.create({
      amount_price, 
      order_number, 
      date_order,
      client_id,
      status
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
