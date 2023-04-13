import mongoose from "mongoose";

const schema = new mongoose.Schema({
    title: { type: String, required: true},
    unit_price: { type: Number, required: true },
    description: { type: String, required: true},
    quantity: { type: Number, required:true },
    maxStock: { type: Number, required:true },
    photo: { type: String, required: true },
    category: { type: String, required: true },
    store_id: { type: mongoose.Types.ObjectId, ref: 'shops', required: true},
    user_id: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
});

const ProductCart = mongoose.model('products_in_carts', schema);

export default ProductCart