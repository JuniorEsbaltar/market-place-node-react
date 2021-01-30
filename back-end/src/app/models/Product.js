module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define("Product", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    status: DataTypes.STRING
  })

  return Product
}