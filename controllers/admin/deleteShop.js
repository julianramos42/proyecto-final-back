import Shop from '../../models/Shop.js'

async function deleteShop(req, res, next) {
    try {
        let shop = await Shop.findOneAndDelete({ _id: req.params.shopid })
        if (shop) {
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