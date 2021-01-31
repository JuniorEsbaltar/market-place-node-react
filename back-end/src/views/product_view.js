module.exports = {
  render(product) {
    return {
      id: product.id,
      status: product.status,
      price: Number(product.price).toFixed(2),
      name: product.name,
    }
  },

  renderMany(products) {
    return products.map(product => { return this.render(product)})
  }
}