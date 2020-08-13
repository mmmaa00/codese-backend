const getAllCategory = (req,res)=> {
    console.log(req.parmams);
    console.log(req.body);
    console.log(req.query.id);
    res.send({
        name: "Minh Anh"
    })
}
const getCategoryById = (req,res)=> {
    console.log(req.query.id)
    res.send('get one')
}
const postCategory = (req,res)=> {
    res.send('create')
}
const updateCategoryById = (req,res)=> {
    res.send('update')
}
const deleteCategoryById = (req,res)=> {
    res.send('delete')
}
module.exports = {
    getAllCategory,
    getCategoryById,
    updateCategoryById,
    deleteCategoryById,
    postCategory
}

