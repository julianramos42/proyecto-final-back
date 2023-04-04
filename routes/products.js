import express from "express"
import schema from "../schemas/products.js"
import ProductController from "../controllers/Products/create.js"
import alreadyExists from "../middlewares/Products/alreadyExists.js"
import validator from "../middlewares/validator.js"
import passport from '../middlewares/passport.js'

const { create } = ProductController

let router = express.Router();

router.post('/create', passport.authenticate('jwt',{session:false}), alreadyExists,validator(schema), create)

export default router