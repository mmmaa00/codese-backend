// Router
const Route = require('express').Router();
const parameterController = require('../controllers/parameter')
Route.get('/list-category-id',
    parameterController.getAllCategoryId);
Route.get('/list-product-id',
    parameterController.getAllProductId);
Route.get('/list-order-id',
    parameterController.getAllOrderId);
Route.get('/list-account-id',
    parameterController.getAllAccountId);

module.exports = Route;
