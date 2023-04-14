import Shop from '../../models/Shop.js'

async function desactivate(req, res, next) {
    try {
        let shop = await Shop.findOne({ _id: req.params.shopid })
        if (shop) {
            if (shop.active) {
                await Shop.findOneAndUpdate(
                    { _id: req.params.shopid },
                    { active: false },
                    { new: true }
                )
                return res.status(200).json({
                    success: true,
                    message: 'Shop desactivated'
                })
            } else {
                await Shop.findOneAndUpdate(
                    { _id: req.params.shopid },
                    { active: true },
                    { new: true }
                )
                return res.status(200).json({
                    success: true,
                    message: 'Shop activated'
                })
            }
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

export default desactivate