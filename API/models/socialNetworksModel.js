import mongoose from "mongoose";

const socialNetworksSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: false,
    require: true,
  },

  instagram: {
    type: String,
    require: false,
  },

  facebook: {
    type: String,
    require: false,
  },
});

socialNetworksSchema.index({ username: "text" });

const SocialNetworksModel = mongoose.model(
  "SocialNetworks",
  socialNetworksSchema
);

export default SocialNetworksModel;

// import mongoose from "mongoose";

// const socialNetworks = new mongoose.Schema({
//   username: {
//     type: String,
//   },

//   socialNetworks: [String],
// });

// socialNetworks.index({ username: "text" });
// const networks = new model("networks", socialNetworks);

// export default networks;
