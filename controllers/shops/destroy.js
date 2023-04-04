import Shop from "../../models/Shop.js";

const controller = {
    destroy: async (req,res,next) => {
        try{
            let shop = await Shop.findOneAndDelete({ user_id: req.user._id })
            if(shop){
                // ACA SE TENDRIAN QUE BORRAR TODOS LOS PRODUCTOS Y DATOS DE ESA TIENDA
                return res.status(200).json({
                    success: true,
                    message: 'Shop deleted successfully'
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