import express from 'express'
import favouritesController from "../controllers/favouritesController/favouritesController.js"
import passport from '../middlewares/passport.js'

const {getFavourites, addFavourites, deleteFavourite, deleteAll} = favouritesController

let router = express.Router();

router.get('/', passport.authenticate('jwt',{session:false}), getFavourites);
router.post('/:shopid', passport.authenticate('jwt',{session:false}), addFavourites);
router.delete('/', passport.authenticate('jwt',{session:false}), deleteAll);
router.delete('/:shopid', passport.authenticate('jwt',{session:false}), deleteFavourite);

export default router