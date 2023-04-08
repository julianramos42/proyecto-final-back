import express from "express"
import schema from "../schemas/products.js"
import ProductController from "../controllers/products/create.js"
import UpdateControler from "../controllers/products/Update.js"
import getOneController from "../controllers/products/get_one.js"
import getProductsController from '../controllers/Products/get_products.js'
import destroyController from "../controllers/products/destroy.js"
import destroyAllController from '../controllers/products/destroy_all.js'
import alreadyExists from "../middlewares/products/alreadyExists.js"
import is_activeMe from "../middlewares/shops/is_activeMe.js"
import validator from "../middlewares/validator.js"
import passport from '../middlewares/passport.js'

const { create } = ProductController
const { update } = UpdateControler
const { destroy } = destroyController
const { destroy_all } = destroyAllController
const {get_products} = getProductsController

let router = express.Router();

router.post('/create', passport.authenticate('jwt',{session:false}), alreadyExists, validator(schema),is_activeMe, create)
router.put("/update/:id", passport.authenticate('jwt',{session:false}), validator(schema), is_activeMe, update)
router.get('/:id', getOneController)
router.get('/',passport.authenticate("jwt",{session:false}),get_products)
router.delete('/delete-all', passport.authenticate("jwt", { session:false }), is_activeMe, destroy_all)
router.delete("/delete/:id", passport.authenticate("jwt", { session:false }), is_activeMe, destroy)


export default router