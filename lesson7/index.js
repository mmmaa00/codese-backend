const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
// const rfs = require('rotating-file-stream') 
const path = require('path')
// const morgan = require('morgan')

const pagination = require('./middlewares/pagination')
app.use(pagination);
const app = express();

//middlewares
const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));
// var accessLogStream = rfs.createStream('access.log', {
//   interval: '1d', // rotate daily
//   path: path.join(__dirname, 'log')
// })
// app.use(morgan('combined', { stream: accessLogStream }))




// 2. router
const parameterRouter = require('./routers/parameter')
const categoryRouter = require('./routers/category')
const productRouter = require('./routers/product')
const orderRouter = require('./routers/order')
const accountRouter = require('./routers/account')

app.use('/api/v1/parameter', parameterRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/product', productRouter);
app.use('/api/v1/order', orderRouter);
app.use('/api/v1/account', accountRouter);

//listen
const PORT = process.env.API_PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`API running at ${PORT}`);
  }
})

