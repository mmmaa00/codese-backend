const R = require('express').Router();
const parameterController = require('../controllers/parameter')

const {tryCatch} = require('../middlewares/errorHandle')

R.get('/list-class-id',
  tryCatch(parameterController.getAllClassId));

R.get('/list-student-id',
  tryCatch(parameterController.getAllStudentId));
  

module.exports = R;