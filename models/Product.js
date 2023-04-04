import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name: { type: String, required: true},
    price: { type: Number, required: true },
    description: { type: String, required: true},
    stock: { type: Number, required:true },
    photo: { type: String, required: true },
    category: { type: String, required: true },
    store_id: { type: mongoose.Types.ObjectId, ref: 'shops', required: true}
});

const ProductModel = mongoose.model('products', schema);

export default ProductModel