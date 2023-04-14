import express from "express"
import schema from "../schemas/categories.js"
import validator from "../middlewares/validator.js"
import passport from '../middlewares/passport.js'
import categoryController from "../controllers/categories/create_category.js"
import categoryGetAll from "../controllers/categories/get_categories.js"

const { create } = categoryController
const { get_category } = categoryGetAll

let router = express.Router();

router.get("/:shopid", get_category)
router.post('/create', passport.authenticate('jwt',{session:false}), validator(schema), create)

export default router