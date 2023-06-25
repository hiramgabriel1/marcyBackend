import mongoose, { model } from "mongoose";
import validator from "validator";

const createPostSecret = new mongoose.Schema({
  title: {
    type: String,
    unique: false,
    require: true,
    maxlength: [60, "el titulo no puede superar los 60 caracteres"],
    validate: {
      validator: (value) => {
        return validator.isLength(value, { max: 60 });
      },
    },
  },

  description: {
    type: String,
    unique: false,
    require: true,
  },
});

const secretPost = new model("secretModel", createPostSecret);

export default secretPost;
