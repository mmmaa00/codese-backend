const orderService = require('../services/order');
const getAllOrder =  async (req,res)=> {
    // console.log(req.parmams);
    // console.log(req.body);
    // console.log(req.query.id);
    // res.send({
    //     name: "Minh Anh"
    console.log(req.query);
    const {data, metadata} = await orderService.getAllOrder(req.pagination);
    res.send({
      status: 1,
      data,
      metadata
    })
};
const getOrderById = async (req,res) => {
    const {id} = req.params; //value
    //const id = req.params.id;
    const {data} = await orderService.getOrderById(id);
    res.send(
        {
            status: 1 ,
            data
        }
    )
};
const createOrder = async (req, res) => {
    const data = await orderService.createOrder(req.body)
    res.send({
      status: 1,
      data
    })
};
const updateOrderById = async (req,res)=> {
    const {id} = req.params;
    const data = await orderService.updateOrderById(id, req.body)
        res.send(
            {
                status: 1,
                data
            }
        )
};
const deleteOrderById = async (req,res)=> {
    const {id} = req.params;
    const data = await orderService.deleteOrderById(id);
    res.send(
        {
            status: 1,
            data
        }
    )
}
module.exports = {
    getAllOrder,
    getOrderById,
    updateOrderById,
    deleteOrderById,
    createOrder
}
