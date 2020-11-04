const R = require('express').Router();
const classController = require('../controllers/class')

const { tryCatch } = require('../middlewares/errorHandle')

R.get('/',
  tryCatch(classController.getAllClass))

R.get('/:id',
  tryCatch(classController.getClassById))

R.post('/',
  tryCatch(classController.createClass))

R.put('/:id',
  tryCatch(classController.updateClass))
  
R.delete('/:id',
  tryCatch(classController.deleteClass))

module.exports = R