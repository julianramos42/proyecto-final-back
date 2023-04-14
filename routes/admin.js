import express from 'express'
import passport from '../middlewares/passport.js'
import is_admin from '../middlewares/admin/is_admin.js'
import desactivateShop from '../controllers/admin/desactivateShop.js'
import deleteShop from '../controllers/admin/deleteShop.js'
import getShops from '../controllers/admin/getAllShop.js'
import getUsers from '../controllers/admin/getAllUsers.js'
import deleteUser from '../controllers/admin/deleteUser.js'
import getProducts from '../controllers/admin/getAllProducts.js'
import deleteProduct from '../controllers/admin/deleteProduct.js'

let router = express.Router();

router.get('/users', passport.authenticate('jwt',{session:false}), is_admin, getUsers)
router.delete('/users/delete/:userid', passport.authenticate('jwt',{session:false}), is_admin, deleteUser)
router.get('/products', passport.authenticate('jwt',{session:false}), is_admin, getProducts)
router.delete('/products/delete/:productid', passport.authenticate('jwt',{session:false}), is_admin, deleteProduct)
router.get('/shops', passport.authenticate('jwt',{session:false}), is_admin, getShops)
router.put('/shops/desactivate/:shopid', passport.authenticate('jwt',{session:false}), is_admin, desactivateShop)
router.delete('/shops/delete/:shopid/:userid', passport.authenticate('jwt',{session:false}), is_admin, deleteShop)

export default router