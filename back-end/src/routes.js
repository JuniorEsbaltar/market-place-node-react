const routes = require('express').Router();
const ClientController = require('./controllers/ClientController')
const ProductController = require('./controllers/ProductController')
const OrderController = require('./controllers/OrderController')

routes.get('/clients', ClientController.index)
routes.post('/clients', ClientController.create)
routes.put('/clients', ClientController.update)

routes.get('/products', ProductController.index)
routes.put('/products', ProductController.update)
routes.post('/products', ProductController.create)

routes.get('/orders', OrderController.index)
routes.post('/clients/:client_id/order', OrderController.create)
routes.get('/orders/:id', OrderController.indexById)

module.exports = routes;
