import registerModel from "../../models/userRegisterModel.js";
import secretPost from "../../models/secretModel.js";
import createPostsModel from "../../models/postModel.js";

export const showUsers = async (req, res) => {
  try {
    const renderUsers = await registerModel.find();
    if (renderUsers) {
      res.json(renderUsers);
    } else {
      res.status(500).json("error");
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const showPosts = async (req, res) => {
  try {
    const showPost = await createPostsModel.find();

    if (showPost) {
      res.status(200).json({ message: showPost });
    } else {
      res.statu(500).json({ message: "error interno" });
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const showSecrets = async (req, res) => {
  try {
    const showSecretsPosts = await secretPost.find();
    if (showSecretsPosts) {
      res.status(200).json({ message: "find", data: showSecretsPosts });
    } else {
      res.status(500).json({ message: "error interno" });
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteUsers = async (req, res) => {
  const { username } = req.params;

  try {
    const deleteUser = await registerModel.findOneAndDelete({ username });
    if (!deleteUser) {
      res.status(404).json("error");
    } else {
      res.status(200).json({ message: "deleted", data: deleteUser });
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const deletePosts = async (req, res) => {
  const { titlePost } = req.params;

  try {
    const deletedPost = await createPostsModel.findOneAndDelete({ titlePost });
    if (deletedPost) {
      res.status(200).json({ message: "deleted", data: deletedPost });
    } else {
      res.status(500).json({ message: "no eliminado" });
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteSecrets = async (req, res) => {
  const { secretTitle } = req.params;

  try {
    const deletedSecret = await secretPost.findOneAndDelete({ secretTitle });
    if (deletedSecret) {
      res.status(200).json({ message: "deleted", data: deletedSecret });
    } else {
      res.status(500).json({ errorMessage: "error interval" });
      console.log("error");
    }
  } catch (error) {
    throw new Error(error);
  }
};