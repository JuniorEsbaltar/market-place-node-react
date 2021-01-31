module.exports = {
  render(order) {
    return {
      id: order.id,
      date_order: order.date_order,
      status: order.status,
      amount_price: order.amount_price,
      order_number: order.order_number,
      client_name: order.clients.name
    }
  },

  renderMany(orders) {
    return orders.map(order => { return this.render(order)})
  }
}