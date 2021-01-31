const date_view = require('./date_view')

module.exports = {
  render(client) {
    return {
      id: client.id,
      name: client.name,
      phone: client.phone,
      birth_date: date_view.render(client.birth_date),
      status: client.status
    }
  },

  renderMany(clients) {
    return clients.map(client => { return this.render(client)})
  }
}