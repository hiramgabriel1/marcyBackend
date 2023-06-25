import secretModel from "../../models/secretModel.js";

// crear posts
export const createPostSecret = async (req, res) => {
  // obtenemos la data del body
  const { title, description } = req.body;

  try {
    // guardamos la data en un objeto para luego guardarla en la db
    const secretPost = {
      title,
      description,
    };

    // subimos la data a la db
    const saveSecretPost = await secretModel.create(secretPost);

    // si todo ha salido bien
    res.status(200).json({ message: "subido con éxito", data: saveSecretPost });
  } catch (error) {
    res.status(500).json({ error: "error en la subida de datos" });
  }
};

// mostrar todos los posts
export const showAllPosts = async (req, res) => {
  try {
    // buscar todos los posts
    const secretPosts = await secretModel.find();
    if (secretPosts == null || secretPosts == false) {
      res.status(404).json({ error: "no se ha encontrado contenido" });
    }
    res.status(201).json({ message: "funciona", data: secretPosts });
  } catch (error) {
    throw new Error(error);
  }
};

// mostrar posts por título
export const showPostByTitle = async (req, res) => {
  const { title } = req.params;

  try {
    // buscar por su titulo en la db
    const renderDataByTitle = await secretModel.find({
      $text: { $search: title },
    });

    // si no se ha encontrado coincidencias dar un 404
    if (!renderDataByTitle || renderDataByTitle.length === 0) {
      res
        .status(404)
        .json({ message: "No se encontró ningún post con ese título" });
    } else {
      res.status(200).json({ message: "Éxito", data: renderDataByTitle });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en la consulta del post por título" });
  }
};
