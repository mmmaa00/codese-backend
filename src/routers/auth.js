//authentication
const R = require('express').Router();
const authController = require('../controllers/auth')
R.get('/login', authController.login)

// R.get('/login', async (req,res,next) => {
//     const user = {
//         username: req.body.username,
//         password: req.body.password
//     }
//     console.log('Đăng nhập bằng user', user);
//     const token = authCo.login(user)
//     res.send('Oke')
// })

module.exports = R