import bcrypt from "bcrypt";
import { comparePassword } from "../../helpers/encryptPassword.js";
import { generateToken } from "../../helpers/handleJWT.js";
import registerModel from "../../models/userRegisterModel.js";

export const accesUser = async (req, res) => {
  // recibimos los datos mediante body
  const { password, email } = req.body;

  try {
    // buscamos en la db el email
    const userEmailFind = await registerModel.findOne({ email });

    // validamos si se encuentra o no en la db el email
    if (!userEmailFind) {
      res.status(401).json({ error: "invalido" });
      return;
    }

    // comparamos las contraseñas
    const passwordCorrect = async (password, hash) => {
      try {
        const match = await bcrypt.compare(password, hash);
        return match;
      } catch (error) {
        res.status(409).json({ error: "invalido" });
      }
    };

    if (!passwordCorrect) {
      res.status(409).json({ error: "invalido" });
      return;
    }

    // pasamos el email al token de JWT para que el usuario tenga acceso
    const token = generateToken(userEmailFind);
    res.status(201).json({ message: "¡success!", userEmailFind, token });
  } catch (error) {
    throw new Error(error);
  }
};