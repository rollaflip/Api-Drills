const express = require('express')
const router = express.Router()
//sub package that express frameworks ships with. handles diff routes
// and htp words

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'handling GET req to /products'
  })
})
//dont need to put /products because we already set app.use(./products)


router.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'handling POSt req to /products'
  })
})

module.exports = router
