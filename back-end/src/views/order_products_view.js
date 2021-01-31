const product_view = require('./product_view')
const date_view = require('./date_view')

module.exports = {
  render(order) {
    return {
      id: order.id,
      date_order: date_view.render(order.date_order),
      status: order.status,
      amount_price: order.amount_price,
      order_number: order.order_number,

      products: product_view.renderMany(order.products)
    }
  },

  renderMany(orders) {
    return orders.map(order => { return this.render(order)})
  }
}