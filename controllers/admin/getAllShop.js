import Shop from "../../models/Shop.js";

async function get_all_shops(req, res, next) {
    try {
        let filter = {};

        if (req.query.name) {
            filter.name = new RegExp(req.query.name.trim(), "i");
        }
        if (req.query.category) {
            filter.category = req.query.category;
        }
        let cantShops = await Shop.countDocuments()
        let shops = await Shop.find(filter);
        if (shops) {
            return res.status(200).json({
                success: true,
                shops,
                cantShops
            });
        }
    } catch (err) {
        next(err);
    }
}

export default get_all_shops;
