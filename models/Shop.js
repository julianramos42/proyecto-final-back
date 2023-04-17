import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: { type: String, require: true },
        category: { type: String, require: true },
        city: { type: String, require: true },
        country: { type: String, require: true },
        description: { type: String, require: true },
        token: { type: String, require: true },
        photo: { type: String, require: true },
        phone: { type: String, require: true},
        banner: { type: String, require: true },
        user_id: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
        active: { type: Boolean, require: false }
    },{
        timestamps: true
    }
)

const Shop = mongoose.model('shops', schema)

export default Shop