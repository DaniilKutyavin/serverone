const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const productRouter = require('./productRouter')
const basketRouter = require('./basketRouter')
const newsRouter = require('./newsRouter')
const ordersRouter = require('./ordersRouter')
const manufacturerRouter = require('./manufacturerRouter')
const deliveryRouter = require('./deliveryRouter')
const contactRouter = require('./contactRouter')
const giftRouter = require('./giftRouter')
const footerRouter = require('./footerRouter')
const buyRouter = require('./buyRouter')

router.use('/user', userRouter)
router.use('/product', productRouter)
router.use('/orders', ordersRouter)
router.use('/basket', basketRouter)
router.use('/news', newsRouter)
router.use('/manufacturer', manufacturerRouter)
router.use('/delivery', deliveryRouter)
router.use('/contact', contactRouter)
router.use('/gift', giftRouter)
router.use('/footer', footerRouter)
router.use('/buy', buyRouter)

module.exports = router