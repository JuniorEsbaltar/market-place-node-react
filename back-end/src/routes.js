const routes = require('express').Router();
const ClientController = require('./controllers/ClientController')
const ProductController = require('./controllers/ProductController')
const OrderController = require('./controllers/OrderController')

routes.get('/clients', ClientController.index)
routes.get('/clients/active', ClientController.show)
routes.post('/clients', ClientController.create)
routes.put('/clients/:id', ClientController.update)

routes.get('/products', ProductController.index)
routes.get('/products/active', ProductController.show)
routes.put('/products/:id', ProductController.update)
routes.post('/products', ProductController.create)

routes.get('/orders', OrderController.index)
routes.post('/clients/:client_id/order', OrderController.create)
routes.get('/orders/:id', OrderController.indexById)

module.exports = routes;
