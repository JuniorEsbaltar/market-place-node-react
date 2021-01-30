module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    amount_price: DataTypes.DECIMAL,
    client_id: DataTypes.INTEGER,
    order_number: DataTypes.DECIMAL,
    date_order: DataTypes.DATE
  })

  Order.associate = (models) => {
    Order.belongsTo(models.Client, {
      foreignKey: {
        allowNull: false
      }
    }),
     
    Order.belongsToMany(models.Product, {
      through: 'orders_products', 
      as: 'products',
      foreignKey: 'order_id',
    })
  }
  return Order
}