import express from 'express'
import favoritesController from "../controllers/favoritesController/favoritesController.js"

const {getFavorites, addFavorites, deleteFavorite} = favoritesController

let router = express.Router();

router.get('/:id', favoritesController.getFavorites);
router.post('/', favoritesController.addFavorites);
router.delete('/:id', favoritesController.deleteFavorite);

export default router