const express = require('express');
const { request, response } = require('express');
const pool = require('./utils/db');
const app = express() ;

app.get('/users',(request,response) => {
    pool.query('select * from `user`;',(err,data) => {
        if(err) console.log(err);
        console.log(data);
        response.send(data)
    })
})
app.get('/products',(request,response) => {
    pool.query('select * from `product`;',(err,data) => {
        if(err) console.log(err);
        console.log(data);
        response.send(data)
    })
})
app.get('/orders',(request,response) => {
    pool.query('select * from `order`;',(err,data) => {
        if(err) console.log(err);
        console.log(data);
        response.send(data)
    })
})
app.get('/categories',(request,response) => {
    pool.query('select * from `category`;',(err,data) => {
        if(err) console.log(err);
        console.log(data);
        response.send(data)
    })
})
const callback = () => {
    console.log('Running at 8080');
}
//localhost:8080/
app.listen(8080, callback)
