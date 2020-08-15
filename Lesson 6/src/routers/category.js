
const categoryController = require('../controllers/category');
const Route = require('express').Router();
Route.get('/',categoryController.getAllCategory);
Route.get('/:id',categoryController.getCategoryById);
Route.post('/:',categoryController.createCategory);
Route.put('/:id',categoryController.updateCategoryById);
Route.delete('/:id',categoryController.deleteCategoryById);

module.exports = Route;
