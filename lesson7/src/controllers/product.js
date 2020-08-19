const productService = require('../services/product');
const getAllProduct =  async (req,res)=> {
    // console.log(req.parmams);
    // console.log(req.body);
    // console.log(req.query.id);
    // res.send({
    //     name: "Minh Anh"
    console.log(req.query);
    const {data, metadata} = await productService.getAllProduct(req.pagination);
    res.send({
      status: 1,
      data,
      metadata
    })
};
const getProductById = async (req,res) => {
    const {id} = req.params; //value
    //const id = req.params.id;
    const {data} = await productService.getProductById(id);
    res.send(
        {
            status: 1 ,
            data
        }
    )
};
const createProduct = async (req, res) => {
    const data = await productService.createProduct(req.body)
    res.send({
      status: 1,
      data
    })
};
const updateProductById = async (req,res)=> {
    const {id} = req.params;
    const data = await orderService.updateProductById(id, req.body)
        res.send(
            {
                status: 1,
                data
            }
        )
};
const deleteProductById = async (req,res)=> {
    const {id} = req.params;
    const data = await productService.deleteProductById(id);
    res.send(
        {
            status: 1,
            data
        }
    )
}
module.exports = {
    getAllProduct,
    getProductById,
    updateProductById,
    deleteProductById,
    createProduct
}
