const accountController = require('../controllers/account');
const Route = require('express').Router();

Route.get('/',accountController.getAllAccount);
Route.get('/:id',accountController.getAccountById);
Route.post('/:',accountController.createAccount);
Route.put('/:id',accountController.updateAccountById);
Route.delete('/:id',accountController.deleteAccountById);

module.exports = Route;
