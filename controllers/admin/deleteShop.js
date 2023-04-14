import Shop from '../../models/Shop.js'
import Product from '../../models/Product.js'
import User from '../../models/User.js'

async function deleteShop(req, res, next) {
    try {
        let shop = await Shop.findOneAndDelete({ _id: req.params.shopid })
        if (shop) {
            await User.findOneAndUpdate(
                { _id: req.params.userid },
                { is_seller: false },
                { new: true }
            )
            await Product.deleteMany({ store_id: shop._id })
            return res.status(200).json({
                success: true,
                message: 'Shop deleted'
            })
        }
        return res.status(404).json({
            success: false,
            message: 'Shop not found'
        })
    } catch (err) {
        next(err)
    }
}

export default deleteShop