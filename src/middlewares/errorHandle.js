const tryCatch = (f) => async (req, res, next) => {
    try {
      await f(req,res)
    } catch (error) {
      next(error)
    }
  }
  
  const errorHandle = (err, req, res, next) => {
    if (err.code < 500 && err.code > 400) {
      res.status(err.code)
      res.send(err.message)
    } else {
      console.log(err)
      // res.status(401) // Unauthorized 
      res.status(400)  
      res.send('Bad request!')
    }
  }
  
  module.exports = {
    errorHandle,
    tryCatch
  }