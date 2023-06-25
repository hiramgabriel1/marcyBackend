import mongoose, { model } from "mongoose";

const registerUser = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true,
  },

  email: {
    type: String,
    require: true,
    unique: true,
  },

  password: {
    type: String,
    require: true,
    unique: false,
    trim: true,
  },

  instagram: {
    type: String,
    require: false,
    unique: true,
    trim: true,
  },
});

const registerModel = new model("userRegisterModel", registerUser)

export default registerModel