import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: {
    type: String,
    enum: ['user', 'admin', 'operation', 'tech'],
    default: 'user',
  }
});

export default mongoose.model("User", userSchema);
