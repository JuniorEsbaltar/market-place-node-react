const routes = require('express').Router();
const UserController = require('./controllers/ClientController')
const ProductController = require('./controllers/ProductController')

routes.get('/clients', UserController.index)
routes.post('/clients', UserController.create)

routes.get('/products', ProductController.index)
routes.post('/products', ProductController.create)

module.exports = routes;