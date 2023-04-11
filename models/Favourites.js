import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
      user_id: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
      store_id: { type: mongoose.Types.ObjectId, ref: 'shops', required: true }
    },
    {
      timestamps: true
    }
  );
  
  const Favourite = mongoose.model('favourites', schema);
  
  export default Favourite;