const express = require('express');

const app = express();
const categoryRoute = require('./routers/category')
app.use('/api/v1/category',categoryRoute);

const hamxuli = (req,res) => {
    //client: req : câu hỏi
    //sever: res : câu trả lời
    res.send('API is running')
}
app.get('/',hamxuli)
// app.get('/api/v1/account');
// app.post('/api/v1/account');  Có thể viết tnay nhưng ko nên!
//app.listen phải viết ở cuối file
app.listen(7000, err => {
    if(err)
        console.log(err);
        console.log('Running');
}) 
