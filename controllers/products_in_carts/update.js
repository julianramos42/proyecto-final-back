import Product_in_carts from '../../models/Product_in_carts.js'

const controller = {
    updateCart: async (req, res, next) => {
      try {
        const product = await Product_in_carts.findOneAndUpdate(
          { _id: req.params.productid, user_id: req.user._id },
          req.body,
          { new: true }
        );
            if (!product) {
            return res.status(404).json({ message: 'Product not found' });
            }
            res.status(200).json({ success: true, message: "Product updated", product});
      } catch (error) {
            res.status(500).send({ message: 'Error updating the product' });
      }
    },
  };
  
  export default controller;