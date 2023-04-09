import express from 'express'
import paymentRouter from './payment.js'
import userRouter from './users.js'
import shopsRouter from './shops.js'
import productsRouter from "./products.js"

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {res.render('index', { title: 'Express' });});

//rutas de todos los recursos
//a traves del metodo .use() le indico al enrutador principal que use esas rutas con esa palabrita(endpoint)
router.use('/auth',userRouter)
router.use('/shop', shopsRouter)
router.use('/payment', paymentRouter)
router.use('/product', productsRouter)

export default router