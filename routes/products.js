import express from "express"
import schema from "../schemas/products.js"
import ProductController from "../controllers/Products/create.js"
import UpdateControler from "../controllers/Products/Update.js"
import getAllController from "../controllers/Products/get_all.js"
import getOneController from "../controllers/Products/get_one.js"
import destroyController from "../controllers/Products/destroy.js"
import alreadyExists from "../middlewares/Products/alreadyExists.js"
import is_activeMe from "../middlewares/shops/is_activeMe.js"
import validator from "../middlewares/validator.js"
import passport from '../middlewares/passport.js'

const { create } = ProductController
const { update } = UpdateControler
const { destroy } = destroyController

let router = express.Router();

router.post('/create', passport.authenticate('jwt',{session:false}), alreadyExists, validator(schema),is_activeMe, create)
router.put("/update/:id", passport.authenticate('jwt',{session:false}), validator(schema), is_activeMe, update)
router.get("/", passport.authenticate('jwt',{session:false}), is_activeMe, getAllController )
router.get('/:id', passport.authenticate("jwt", { session:false }), is_activeMe, getOneController)
router.delete("/delete/:id", passport.authenticate("jwt", { session:false }), is_activeMe, destroy)


export default router