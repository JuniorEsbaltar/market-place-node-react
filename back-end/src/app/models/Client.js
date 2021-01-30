module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define("Client", {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    birth_date: DataTypes.DATE,
    status: DataTypes.STRING
  })

  return Client
}