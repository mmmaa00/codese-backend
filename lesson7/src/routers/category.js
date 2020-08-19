
//Cách 1
// const express = require('express')
// const Route = express.Router();
//Cách 2
const categoryController = require('../controllers/category');
const Route = require('express').Router();
// const hamxuli = (req,res) => {
//     res.send('Hello Category Route')
// }
// Route.get('/',hamxuli)

Route.get('/',categoryController.getAllCategory);
Route.get('/:id',categoryController.getCategoryById);
Route.post('/:',categoryController.createCategory);
Route.put('/:id',categoryController.updateCategoryById);
Route.delete('/:id',categoryController.deleteCategoryById);

module.exports = Route;
