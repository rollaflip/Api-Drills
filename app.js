const express = require('express')
const app = express()
const morgan = require('morgan')
//spins up express application to gain access to methods

const productRoutes = require('./api/routes/products')
const orderRoutes = require('./api/routes/orders')

app.use(morgan('dev'))

    // app.use((req, res, next) => {
    //   res.status(200).json({
    //     message: 'Connected to Server!'
    //   })
    // })
    // //middle ware - incoming requrest and things passed through it
    // // request, response, next passes request to next middleware

app.use('/products', productRoutes)
app.use('/orders', orderRoutes)
//only paths that start with products will handle 2nd argument

app.use((req, res, next) =>{
  const error = new Error('Not Found Man!')
  error.status = 404
  next(error)
})

app.use((error, req, res, next)=> {
  res.status(error.status || 500)
  res.json({
    error: {
      message: error.message
    }
  })
})

module.exports = app
