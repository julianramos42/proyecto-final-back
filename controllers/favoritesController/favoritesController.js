import Favorite from "../../models/Favorites.js"

const controller = {
    getFavorites: async(req, res)=>{
        try {
            const user_id = req.params.id;
            const favorites = await Favorite.find({ user_id }).populate('shop_id');
            res.json(favorites);
          } catch (error) {
            console.error(error);
            res.status(500).json(
                { 
                    success: false,
                    message: 'Server Error' 
                });
          }
    },

    addFavorites: async(req, res)=>{
        try {
            const { user_id, shop_id } = req.body;
            const favorite = new Favorite({ user_id, shop_id });
            await favorite.save();
            res.json(favorite);
          } catch (error) {
            console.error(error);
            res.status(500).json(
                { 
                    success: false,
                    message: 'Server Error' 
                });;
          }
    },

    deleteFavorite: async(req, res)=>{
        try {
            const { id } = req.params;
            const favorite = await Favorite.findByIdAndDelete(id);
            res.json(favorite);
          } catch (error) {
            console.error(error);
            res.status(500).json(
                { 
                    success: false,
                    message: 'Server Error' 
                });;
          }
    },   
}

export default controller