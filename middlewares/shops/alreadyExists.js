import Shop from '../../models/Shop.js'

async function alreadyExists(req, res, next) {

    try{
        const shop = await Shop.findOne({ user_id: req.user._id })

    if(shop){
        if(shop.active){
            return res.status(400).json({
                success: false,
                message: 'You can only have 1 shop'
            })
        }else{
            await Shop.findOneAndUpdate(
                { _id: shop._id },
                { active: true }
            )
            return res.status(200).json({
                success: true,
                message: "Welcome back "+shop.name
            })
        }
    } else{
        next()
    }

    }catch(error){
        next(error)
    }

}

export default alreadyExists