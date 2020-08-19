const orderController = require('../controllers/order');
const Route = require('express').Router();

Route.get('/',orderController.getAllOrder);
Route.get('/:id',orderController.getOrderById);
Route.post('/:',orderController.createOrder);
Route.put('/:id',orderController.updateOrderById);
Route.delete('/:id',orderController.deleteOrderById);

module.exports = Route;
