import Shop from "../../models/Shop.js";
import Product from "../../models/Product.js"
import User from '../../models/User.js'
import Favourite from '../../models/Favourites.js'
import Category from '../../models/category.js'

const controller = {
    destroy: async (req, res, next) => {
        try {
            let shop = await Shop.findOneAndDelete({ user_id: req.user._id })
            if (shop) {
                await Category.deleteMany({store_id: shop._id})
                await Favourite.deleteMany({store_id: shop._id})
                await Product.deleteMany({ store_id: shop._id })
                await User.findOneAndUpdate(
                    { _id: req.user._id },
                    { is_seller: false },
                    { new: true }
                )
                return res.status(200).json({
                    success: true,
                    message: 'Shop deleted successfully'
                })
            } else {
                return res.status(404).json({
                    success: false,
                    message: 'Shop not found'
                })
            }
        } catch (err) {
            next(err)
        }
    }
}

export default controller