import registerModel from "../../models/userRegisterModel.js";

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