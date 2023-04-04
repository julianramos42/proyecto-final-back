import Shop from '../../models/Shop.js'

const controller = {
    get_one: async(req,res,next) => {
        try{
            let shop = await Shop.findOne({ _id: req.params.id })
            if(shop){
                return res.status(200).json({
                    success: true,
                    shop
                })
            }else{
                return res.status(404).json({
                    success: false,
                    message: 'Shop not found'
                })
            }
        }catch(err){
            next(err)
        }
    }
}

export default controller