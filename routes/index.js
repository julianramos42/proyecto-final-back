import express from 'express'
import paymentRouter from '../routes/payment.js'
import userRouter from '../routes/users.js'
import shopsRouter from '../routes/shops.js'

let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {res.render('index', { title: 'Express' });});

//rutas de todos los recursos
//a traves del metodo .use() le indico al enrutador principal que use esas rutas con esa palabrita(endpoint)
router.use('/auth',userRouter)
router.use('/shop', shopsRouter)
router.use('/payment', paymentRouter)

export default router