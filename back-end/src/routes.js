const routes = require("express").Router();

routes.use('/', (request, response) => {
  response.json({message: 'Hello World'})
})
module.exports = routes;