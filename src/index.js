const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const rfs = require('rotating-file-stream')
const pagination = require('./middlewares/pagination')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors(
  {
  origin: '*',
  'Access-Control-Expose-Headers': 'Content-Range',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  optionsSuccessStatus: 200, 
  }
));
var accessLogStream = rfs.createStream('access.log', {
  interval: '1d',// rotate daily
  path: path.join(__dirname, 'log')
})
app.use(morgan('combined', { stream: accessLogStream }))
app.use(pagination)
app.use((req, res, next) => {
  console.log('------------------------------------------------------');
  console.log('req', req.method, req.originalUrl);
  console.log('body: ', req.body);
  console.log('params: ', req.params);
  console.log('query: ', req.query);
  next();
})

// 2. router
const parameterRouter = require('./routers/parameter')
const classRouter = require('./routers/class')
const studentRouter = require('./routers/student')

app.use('/api/v1/parameter', parameterRouter);
app.use('/api/v1/class', classRouter);
app.use('/api/v1/student', studentRouter);


app.get('/api/v1/test-err', (req, res, next) => {
  next('Có lỗi 1')
})
app.get('/api/v1/test-err2', (req, res, next) => {
  throw Error('Có lỗi 2')
})

// 3. error handle middleware
const { errorHandle } = require('./middlewares/errorHandle')
app.use(errorHandle); 

// 4. listen
const PORT = process.env.API_PORT;
app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`API running at ${PORT}`);
  }
})