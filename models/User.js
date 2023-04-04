import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: { type: String, required: true },
        password: { type: String, required: true },
        photo: { type: String, required: true },
        is_online: { type: Boolean, required: true },
        is_admin: { type: Boolean, required: true },
        is_author: { type: Boolean, required: false },
        is_company: { type: Boolean, required: false },
        is_verified: { type: Boolean, required: true },
        verify_code: { type: String, required: true }
    },{
        timestamps: true
    }
)
const User = mongoose.model('users',schema)
export default User
