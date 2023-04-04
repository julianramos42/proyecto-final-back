import Shop from "../../models/Shop.js";

const controller = {
    get_all: async(req,res,next) => {
        try{
            let shops = await Shop.find({active: true})
            if(shops){
                return res.status(200).json({
                    success: true,
                    shops
                })
            }
        }catch(err){
            next(err)
        }
    }
}

export default controller