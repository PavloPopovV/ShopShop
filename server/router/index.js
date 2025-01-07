const {Router } = require('express')
const authRouter = require('./authRouter')
const cartRouter = require('./cartRouter')
const favRouter = require('./favRouter')
const categoryRouter = require('./categoryRouter')
const productRouter = require('./productRouter')

const router = Router()

router.use('/users', authRouter)
router.use('/cart', cartRouter)
router.use('/favourite', favRouter)
router.use('/category', categoryRouter)
router.use('/product', productRouter)

module.exports = router