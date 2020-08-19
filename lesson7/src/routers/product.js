const productController = require('../controllers/product');
const Route = require('express').Router();

Route.get('/',productController.getAllProduct);
Route.get('/:id',productController.getProductById);
Route.post('/:',productController.createProduct);
Route.put('/:id',productController.updateProductById);
Route.delete('/:id',productController.deleteProductById);

module.exports = Route;
