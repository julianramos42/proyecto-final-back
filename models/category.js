import mongoose from "mongoose";

const schema = new mongoose.Schema({
    category_name: { type: String, required: true},
    store_id: { type: mongoose.Types.ObjectId, ref: 'shops', required: true}
});

const Categorie = mongoose.model('categories', schema);

export default Categorie