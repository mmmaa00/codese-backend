const classService = require('../services/class')
const studentService = require('../services/student')

const getAllClassId = async (req, res) => {
  console.log(req.pagination);
  const { data, metadata }
    = await classService.getAllId() 
  res.send({
    status: 1,
    data,
    metadata,
  })
}
const getAllStudentId = async (req, res) => {
  console.log(req.pagination);
  const { data, metadata }
    = await studentService.getAllId();
  res.send({
    status: 1,
    data,
    metadata,
  })
}

module.exports = {
  getAllClassId,
  getAllStudentId,
}