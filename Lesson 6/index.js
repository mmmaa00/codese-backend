const express = require('express');
const bodyParser = require('body-parser');2

const app = express();
const port = 7000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const categoryRoute = require('./routers/category');
app.use('/api/v1/category',categoryRoute);
const checkHealth = (req,res) => {
    res.send(`API running at ${port}`);
}
app.get('/',checkHealth);
app.listen(port, err => {
    if(err)
        console.log(err);
        console.log('Running');
})
