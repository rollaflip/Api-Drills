const express = require('express');
const app = express();
//spins up express application to gain access to methods
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//extract json data to be easily read

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  //* gives access to all clients for public API.
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  //choose which headers to add to responses
  if (req.method === 'OPTIONS') {
    //checks http method
    res.header('Access-Control-Allot-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({});
  }
  next();
});

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// app.use((req, res, next) => {
//   res.status(200).json({
//     message: 'Connected to Server!'
//   })
// })
// //middle ware - incoming requrest and things passed through it
// // request, response, next passes request to next middleware

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
//only paths that start with products will handle 2nd argument

app.use((req, res, next) => {
  const error = new Error('Not Found Man!');
  error.status = 404;
  next(error);
});
//throws if end point is incorrect

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});
//catches final error, or returns 500 if server error

module.exports = app;
