import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        payment_id: { type: Number, required: true },
        totalValue: { type: Number, required: true },
        products: { type: Array, required: true },
        user_id: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
        store_id: { type: mongoose.Types.ObjectId, ref: 'shops', required: true },
    },
    {
        timestamps: true
    }
);

const Payment = mongoose.model('payments', schema);

export default Payment;