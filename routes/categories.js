import express from "express"
import schema from "../schemas/categories.js"
import validator from "../middlewares/validator.js"
import passport from '../middlewares/passport.js'
import categoryController from "../controllers/categories/create_category.js"

const { create } = categoryController

let router = express.Router();

router.post('/create', passport.authenticate('jwt',{session:false}), validator(schema), create)

export default router