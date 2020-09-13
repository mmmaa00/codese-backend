const categoryService = require('../services/category')

const getAll = async (req, res) => {
  console.log(req.query);
  const { data, metadata } = await categoryService.getAll(req.pagination) 
  res.send({
    status: 1,
    data,
    metadata,
  })
}

const getById = async (req, res) => {
  const { id } = req.params;
  const { data } = await categoryService.getById(id);
  res.send({
      status: 1,
      data
    })
}
const create= async (req, res) => {
  await categoryService.create(req.body)
  res.send({
    status: 1,
  })
}
const updateById = async (req, res) => {
  const { id } = req.params;
  await categoryService.updateById(id, req.body)
  res.send({
    status: 1,// true - 1, false 0
  })
}
const deleteById = async (req, res) => {
  const { id } = req.params;
  await categoryService.deleteById(id)
  res.send({
    status: 1,// true - 1, false 0
  });
}

// router => controllers => services 
module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
}