import Shop from '../../models/Shop.js'

const controller = {
    create: async(req,res,next) => {
        const { user } = req
        req.body.user_id = user._id
        req.body.active = true
        try{
            await Shop.create(req.body)
            return res.status(201).json({
                success: true,
                message: 'New shop created succesfully',
                data: req.body
            })
        }catch(error){
            next(error)
        }
    }
}

export default controller