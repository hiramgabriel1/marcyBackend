import { encryptPassword } from "../../helpers/encryptPassword.js";
import registerModel from "../../models/userRegisterModel.js";

export const createUser = async (req, res) => {
  const { username, email, password, instagram } = req.body;
  try {
    // encriptamos la contraseña
    const encrypted = await encryptPassword(password);

    // creamos objeto para guardar los datos obtenidos y luego pasarlos a la db
    const userData = {
      username,
      email,
      encrypted,
      instagram,
    };

    // guardamos los datos en la db
    const userCreated = await registerModel.create(userData);

    // validamos si se ha guardado o no en la db y porque
    if (!userCreated) {
      res.json({ error: "no se ha creado el usuario" });
      return;
    }
    res.json({ message: "usuario creado con éxito", data: userData });
  } catch (error) {
    throw new Error(error);
  }
};
