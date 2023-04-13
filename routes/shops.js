import express from 'express'
import createController from '../controllers/shops/create.js'
import getMeController from '../controllers/shops/get_me.js'
import getOneController from '../controllers/shops/get_one.js'
import getAllController from '../controllers/shops/get_all.js'
import updateController from '../controllers/shops/update.js'
import desactivateController from '../controllers/shops/desactivate.js'
import destroyController from '../controllers/shops/destroy.js'
import validator from '../middlewares/validator.js'
import schema from '../schemas/shops.js'
import passport from '../middlewares/passport.js';
import alreadyExists from '../middlewares/shops/alreadyExists.js'
import is_activeMe from '../middlewares/shops/is_activeMe.js'
import is_active from '../middlewares/shops/is_active.js'
import getAllProductsController from "../controllers/products/get_all.js"
// CART
import createCartProductController from '../controllers/products_in_carts/create.js'
import getAllProductsInCart from '../controllers/products_in_carts/get_all.js'
import destroy_one_product from '../controllers/products_in_carts/destroy_one.js'
import destroy_all_product from '../controllers/products_in_carts/destroy_all.js'
import alreadyExistsProduct from '../middlewares/products_in_carts/alreadyExists.js'
import updateCartController from '../controllers/products_in_carts/update.js'
import createSchema from '../schemas/product_in_cart.js'
import updateSchema from '../schemas/updateProduct_in_cart.js'
// 

const { create } = createController
const { me } = getMeController
const { get_one } = getOneController
const { get_all } = getAllController
const { update } = updateController
const { desactivate } = desactivateController
const { destroy } = destroyController
const {createCartProduct} = createCartProductController
const { updateCart } = updateCartController

let router = express.Router()

router.post('/create', passport.authenticate("jwt", { session:false }), validator(schema), alreadyExists, create)
router.get('/', get_all)
router.get('/me', passport.authenticate("jwt", { session:false }), is_activeMe, me)
router.get("/:id/products", getAllProductsController )
router.get('/:id', is_active, get_one)
router.put('/update', passport.authenticate("jwt", { session:false }), validator(schema), is_activeMe, update)
router.put('/desactivate', passport.authenticate("jwt", { session:false }), desactivate)
router.delete('/delete', passport.authenticate("jwt", { session:false }), destroy)
// CART
router.post('/:id/createcartproduct', passport.authenticate("jwt", { session:false }), validator(createSchema), alreadyExistsProduct, createCartProduct)
router.get('/:id/cart', passport.authenticate("jwt", { session:false }), getAllProductsInCart)
router.put('/cart/update/:productid', passport.authenticate("jwt", { session:false }), validator(updateSchema), updateCart )
router.delete('/cart/deleteone/:productid', passport.authenticate("jwt", { session:false }), destroy_one_product )
router.delete('/:id/cart/deleteall', passport.authenticate("jwt", { session:false }), destroy_all_product )
// 

export default router