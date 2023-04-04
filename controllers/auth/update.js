import User from "../../models/User.js";

const controller = {
  upd: async (req, res, next) => {
    try {
      let id = req.user._id
      let upd = await User.findOneAndUpdate(
        {_id: id},
        req.body,
        {new: true}
      )
      upd.password=null
      return res.status(200).json({
        success: true,
        message:'Update!',
        upd
      })
    } catch (error) {
      next(error)
    }
  },
};

export default controller;