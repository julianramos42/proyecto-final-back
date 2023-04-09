import mongoose from 'mongoose'

const schema = new mongoose.Schema(
    {
      user_id: { type: mongoose.Types.ObjectId, ref: 'users', required: true },
      shop_id: { type: mongoose.Types.ObjectId, ref: 'shops', required: true }
    },
    {
      timestamps: true
    }
  );
  
  const Favorite = mongoose.model('favorites', schema);
  
  export default Favorite;