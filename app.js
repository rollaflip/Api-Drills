const express = require('express')
const app = express()
//spins up express application to gain access to methods

app.use((req, res, next) => {
  res.status(200).json({
    message: 'Connected to Server!'
  })
})
//middle ware - incoming requrest and things passed through it
// request, response, next passes request to next middleware

module.exports = app
