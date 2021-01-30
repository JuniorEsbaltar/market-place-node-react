const routes = require("express").Router();
const { User } = require('./app/models')

const data = new Date

User.create({
  name: 'Júnior', 
  phone: '62982364065', 
  birth_date: data
})
module.exports = routes;