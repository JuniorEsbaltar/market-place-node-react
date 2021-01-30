module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    status: DataTypes.STRING
  })
  
  Product.associate = (models) => {
    Product.belongsToMany(models.Order, {
      through: 'orders_products', 
      as: 'orders',
      foreignKey: 'product_id', 
    })
  }

  return Product
}

