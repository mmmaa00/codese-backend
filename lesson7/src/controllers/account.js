const orderService = require('../services/order');
const getAllAccount =  async (req,res)=> {
    // console.log(req.parmams);
    // console.log(req.body);
    // console.log(req.query.id);
    // res.send({
    //     name: "Minh Anh"
    console.log(req.query);
    const {data, metadata} = await accountService.getAllAccount(req.pagination);
    res.send({
      status: 1,
      data,
      metadata
    })
};
const getAccountById = async (req,res) => {
    const {id} = req.params; //value
    //const id = req.params.id;
    const {data} = await accountService.getAccountById(id);
    res.send(
        {
            status: 1 ,
            data
        }
    )
};
const createAccount = async (req, res) => {
    const data = await accountService.createAccount(req.body)
    res.send({
      status: 1,
      data
    })
};
const updateAccountById = async (req,res)=> {
    const {id} = req.params;
    const data = await accountService.updateAccountById(id, req.body)
        res.send(
            {
                status: 1,
                data
            }
        )
};
const deleteAccountById = async (req,res)=> {
    const {id} = req.params;
    const data = await accountService.deleteAccountById(id);
    res.send(
        {
            status: 1,
            data
        }
    )
}
module.exports = {
    getAllAccount,
    getAccountById,
    updateAccountById,
    deleteAccountById,
    createAccount
}
