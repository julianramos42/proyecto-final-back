import Product from "../../models/Product.js"

const controller = {
    update: async (req, res, next) => {
      try {
        const product = await Product.findOneAndUpdate(
          { _id: req.params.id },
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