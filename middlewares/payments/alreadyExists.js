import Payment from '../../models/Payment.js'

async function alreadyExists(req,res,next){
    try{
        const payment = await Payment.findOne({payment_id: req.body.payment_id, user_id: req.user._id})
        if(!payment){
            next()
        }else{
            return res.status(400).json({
                success: false,
                message: 'Payment already exists'
            })
        }
    }catch(err){
        next(err)
    }
}

export default alreadyExists