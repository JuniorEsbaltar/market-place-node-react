module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define("Client", {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    status: DataTypes.STRING
  })

  Client.associate = models => {
    Client.hasMany(models.Order, {
      foreignKey: 'client_id',
      as: 'orders',
      onDelete: "cascade"
    })
  }
 
  return Client
}
