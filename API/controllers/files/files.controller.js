import fileModel from "../../models/filesModel.js";

export const uploadFile = async (req, res) => {
  const files = req.files;

  try {
    // Crea una instancia de fileModel y guarda los datos en la base de datos
    for (const file of files) {
      const fileInstance = new fileModel({
        title: file.path,
        route: file.path,
        // asigna otros valores relevantes al objeto fileInstance
      });

      await fileInstance.save();
    }

    // Envía una respuesta indicando que la carga fue exitosa
    res.status(200).json({ message: "Archivos cargados exitosamente." });
  } catch (error) {
    console.error("Error al guardar el archivo:", error);
    res.status(500).json({ error: "Error al guardar los archivos." });
  }
};

export const showFiles = async (req, res) => {
  try {
    const showData = await fileModel.find();
    res.json({ data: showData });
  } catch (error) {
    console.error("Error al obtener los archivos:", error);
    res.status(500).json({ error: "Error al obtener los archivos." });
    throw new Error(error);
  }
};

export const filterFiles = async (req, res) => {
  // obener el nombre que se pide filtrar
  const { filter } = req.params;
  // buscar por su titulo en la db

  try {
    const renderDataByTitle = await fileModel.find({
      $text: { $search: filter },
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
    throw new Error(error);
  }
};
