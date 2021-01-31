module.exports = {
  render(product) {
    return {
      id: product.id,
      status: product.status,
      price: product.price,
      name: product.name,
    }
  },

  renderMany(products) {
    return products.map(product => { return this.render(product)})
  }
}