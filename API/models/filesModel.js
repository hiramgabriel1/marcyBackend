import mongoose from "mongoose";

const filesSchema = new mongoose.Schema({
  title: String,
  route: String,
});

filesSchema.index({ title: "text" });

const fileModel = mongoose.model("files", filesSchema);

export default fileModel;
