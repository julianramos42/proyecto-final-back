import Shop from '../../models/Shop.js'

async function is_active(req, res, next) {
    const shop = await Shop.findOne({ _id: req.params.id })
    if (shop) {
        if (shop.active) {
            next()
        } else {
            return res.status(400).json({
                success: false,
                message: 'Shop is not active'
            })
        }
    } else {
        return res.status(404).json({
            success: false,
            message: 'Shop not found'
        })
    }
}

export default is_active