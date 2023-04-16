import User from '../../models/User.js'
import Shop from '../../models/Shop.js'
import Product from '../../models/Product.js'
import Favourite from '../../models/Favourites.js'
import Category from '../../models/category.js'

async function deleteUser(req, res, next) {
    try {
        let user = await User.findOneAndDelete({ _id: req.params.userid })
        if (user) {
            let store = await Shop.findOneAndDelete({ user_id: user._id })
            if (store) {
                await Product.deleteMany({ store_id: store._id })
                await Category.deleteMany({store_id: store._id})
                await Favourite.deleteMany({store_id: store._id})
            }
            await Favourite.deleteMany({ user_id: user._id })
            return res.status(200).json({
                success: true,
                message: 'User deleted'
            })
        }
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    } catch (err) {
        next(err)
    }
}

export default deleteUser