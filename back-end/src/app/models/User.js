module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    birth_date: DataTypes.DATE,
  })

  return User
}