import mongoose, { model } from "mongoose";
import validator from "validator";

const postModel = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    unique: false,
    maxlenght: [70, "no se puede añadir un titulo con mas de 70 caracteres"],
    validate: {
      validator: (value) => {
        return validator.isLength(value, { max: 70 });
      },
    },
  },

  description: {
    type: String,
    require: false,
    unique: false,
    maxlenght: [250, "no se puede una descripción de mas de 200 caracteres"],
    validate: {
      validator: (value) => {
        return validator.isLength(value, { max: 250 });
      },
    },
  },

  file: {
    type: String,
  },
});

postModel.index({ title: "text" });
const createPostsModel = new model("postModel", postModel);

export default createPostsModel;
