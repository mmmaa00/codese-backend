const R = require('express').Router();
const accountController = require('../controllers/account');
const { response } = require('express');

const { tryCatch } = require('../middlewares/errorHandle')

R.get('/',
  tryCatch(accountController.getAllAccount))

R.get('/:id',
  tryCatch(accountController.getAccountById))

R.post('/',
  tryCatch(accountController.createAccount))

R.put('/:id',
  tryCatch(accountController.updateAccount))
  
R.delete('/:id',
  tryCatch(accountController.deleteAccount))


// R.post('/', async (req,res,next) => {
//     const newAccount = {
//         username: req.body.username,
//         password: req.body.password,
//         display: req.body.display
//     }
//     const result = await accountController.create(newAccount);
//     res.send(result);
// })

module.exports = R


