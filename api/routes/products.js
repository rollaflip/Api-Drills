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
  res.status(201).json({
    message: 'handling POSt req to /products'
  })
})

router.get('/:productId', (req, res, next) => {
  const id = req.params.productId
  if(id === 'special'){
    res.status(200).json({
      message: 'You discovered the special ID!',
      id: id
    })
  } else {
    res.status(200).json({
      message: 'you passed an id'
    })
  }
})

router.patch('/:productId', (req, res, next) => {
  const id = req.params.productId
    res.status(200).json({
      message: `You updated product ${id}`
    })
})

router.delete('/:productId', (req, res, next) => {
  const id = req.params.productId
  res.status(200).json({
    message: `You deleted a product: ${id}`
  })
})

module.exports = router
