import Shop from "../../models/Shop.js";

const controller = {
  get_all: async (req, res, next) => {
    try {
      let filter = {
        active: true,
      };

      if (req.query.name) {
        filter.name = new RegExp(req.query.name.trim(), "i");
      }
      if (req.query.category) {
        filter.category = req.query.category.split(",");
      }

      let shops = await Shop.find(filter);
      if (shops) {
        return res.status(200).json({
          success: true,
          shops,
        });
      }
    } catch (err) {
      next(err);
    }
  },
};

export default controller;
