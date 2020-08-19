// Controller
const categoryService = require('../services/category');
const productService = require('../services/product');
const orderService = require('../services/order');
const accountService = require('../services/account')

const getAllCategoryId = async (req, res) => {
  const {data, metadata} = await categoryService.getAllCategoryId(); 
  res.send({
    status: 1,
    data,
    metadata
  })
}
const getAllProductId = async (req, res) => {
  const {data, metadata}= await productService.getAllProductId();
  res.send({
    status: 1,
    data,
    metadata,
  })
}
const getAllOrderId = async (req, res) => {
    const {data, metadata}= await orderService.getAllOrderId();
    res.send({
      status: 1,
      data,
      metadata,
    })
}
const getAllAccountId = async (req, res) => {
    const {data, metadata}= await accountService.getAllAccountId();
    res.send({
      status: 1,
      data,
      metadata,
    })
}

module.exports = {
  getAllCategoryId,
  getAllProductId,
  getAllAccountId,
  getAllOrderId
}
