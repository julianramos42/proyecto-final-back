import User from '../../models/User.js'

async function deleteUser(req, res, next) {
    try {
        let user = await User.findOneAndDelete({ _id: req.params.userid })
        if (user) {
            return res.status(200).json({
                success: true,
                message: 'User deleted'
            })
        }
        return res.status(404).json({
            success: false,
            message: 'User not found'
        })
    } catch (err) {
        next(err)
    }
}

export default deleteUser