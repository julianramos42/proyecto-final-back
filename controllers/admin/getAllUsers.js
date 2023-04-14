import User from '../../models/User.js'

async function get_all_users(req, res, next) {
    try {
        let filter = {};

        if (req.query.name) {
            filter.name = new RegExp(req.query.name.trim(), "i");
        }

        let sort = -1
        if(req.query.sort){
            sort = req.query.sort
        }

        let cantUsers = await User.countDocuments()
        let users = await User.find(filter).sort({is_seller: sort});
        if (users) {
            return res.status(200).json({
                success: true,
                users,
                cantUsers
            });
        }
    } catch (err) {
        next(err);
    }
}

export default get_all_users;
