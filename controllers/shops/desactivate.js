import Shop from '../../models/Shop.js'

const controller = {
    desactivate: async (req, res, next) => {
        try {
            let state = false
            if (req.body.state) {
                state = req.body.state
            }

            let shop = await Shop.findOneAndUpdate(
                { user_id: req.user._id },
                { active: state },
                { new: true }
            )
            if (shop) {
                if (state) {
                    return res.status(200).json({
                        success: true,
                        message: 'Shop activated'
                    })
                } else {
                    return res.status(200).json({
                        success: true,
                        message: 'Shop desactivated'
                    })
                }
            }
            return res.status(404).json({
                success: false,
                message: 'Shop not found'
            })
        } catch (err) {
            next(err)
        }
    }
}

export default controller