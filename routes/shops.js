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

const { create } = createController
const { me } = getMeController
const { get_one } = getOneController
const { get_all } = getAllController
const { update } = updateController
const { desactivate } = desactivateController
const { destroy } = destroyController

let router = express.Router()

router.post('/create', passport.authenticate("jwt", { session:false }), alreadyExists, validator(schema), create)
router.get('/', get_all)
router.get('/me', passport.authenticate("jwt", { session:false }), is_activeMe, me)
router.put('/update', passport.authenticate("jwt", { session:false }), validator(schema), is_activeMe, update)
router.put('/desactivate', passport.authenticate("jwt", { session:false }), desactivate)
router.delete('/delete', passport.authenticate("jwt", { session:false }), destroy)
router.get('/:id', passport.authenticate("jwt", { session:false }), is_active, get_one)

export default router