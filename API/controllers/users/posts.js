import createPostsModel from "../../models/postModel.js";

// TODO create post controller
export const createPost = async (req, res) => {
  const { title, description } = req.body;

  try {
    const newPost = {
      title,
      description,
    };

    const createdPost = await createPostsModel.create(newPost);

    if (createdPost) {
      res
        .status(201)
        .json({ message: "Post creado exitosamente", data: createdPost });
    } else {
      res.status(500).json({ error: "Error al crear el post" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error en la creación del post" });
  }
};

// TODO: mostrar todos los posts
export const showPosts = async (req, res) => {
  try {
    const getPosts = await createPostsModel.find();
    if (getPosts) {
      res.json({ message: "funciona", data: getPosts });
    } else {
      return res.status(500).json({ error: "Error al renderizar posts" });
    }
  } catch (error) {
    throw new Error(error);
  }
};

// TODO: filtrar contenido
export const filterPosts = async (req, res) => {
  // obtener la data del filtro
  const { filter } = req.params;

  try {
    const renderDataByTitle = await createPostsModel.find({
      $text: { $search: filter },
    });

    // si no se ha encontrado coincidencias dar un 404
    if (!renderDataByTitle || renderDataByTitle.length === 0) {
      res
        .status(404)
        .json({ message: "No se encontró ningún post con ese título" });
    } else {
      res.status(200).json({ message: "Éxito", found: renderDataByTitle });
      console.log(renderDataByTitle);
    }
  } catch (error) {
    throw new Error(error);
  }
};
