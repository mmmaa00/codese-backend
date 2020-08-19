//file nay xu li du lieu, xu li query, params , ...

const categoryService = require('../services/category');
const getAllCategory =  async (req,res)=> {
    // console.log(req.parmams);
    // console.log(req.body);
    // console.log(req.query.id);
    // res.send({
    //     name: "Minh Anh"
    console.log(req.query);
    const {data, metadata} = await categoryService.getAllCategory(req.pagination) 
    res.send({
      status: 1,
      data,
      metadata
    })
};
const getCategoryById = async (req,res) => {
    const {id} = req.params; //value
    //const id = req.params.id;
    const {data} = await categoryService.getCategoryById(id);
    res.send(
        {
            status: 1 ,
            data
        }
    )
};
const createCategory = async (req, res) => {
    const data = await categoryService.createCategory(req.body)
    res.send({
      status: 1,
      data
    })
};
const updateCategoryById = async (req,res)=> {
    const {id} = req.params;
    const data = await categoryService.updateCategoryById(id, req.body)
        res.send(
            {
                status: 1,
                data
            }
        )
};
const deleteCategoryById = async (req,res)=> {
    const {id} = req.params;
    const data = await categoryService.deleteCategoryById(id);
    res.send(
        {
            status: 1,
            data
        }
    )
}
module.exports = {
    getAllCategory,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById,
    createCategory
}

