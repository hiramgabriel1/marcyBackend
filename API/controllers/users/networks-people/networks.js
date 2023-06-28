import networks from "../../../models/socialNetworksModel.js";

// TODO: upload social networks
export const submitSocialNetworks = async (req, res) => {
  const { username, instagram, facebook } = req.body;

  try {
    // creamos un objeto para guardar los datos obtenidos en la db
    const usersNetworks = {
      username,
      instagram,
      facebook,
    };

    // subimos a la db
    const uploadUsersNetworks = await networks.create(usersNetworks);
    if (uploadUsersNetworks) {
      res.status(200).json({ message: "upload", data: uploadUsersNetworks });
    } else {
      res.status(500).json({ errorMessage: "error" });
    }
  } catch (error) {
    throw new Error(error);
  }
};

// TODO: mostrar todas las redes
export const getSocialNetworks = async (req, res) => {
  try {
    const usersSocialNetworks = await networks.find();
    if (usersSocialNetworks.length > 0) {
      res.status(200).json({ message: "found", data: usersSocialNetworks });
    } else if (!usersSocialNetworks || usersSocialNetworks.length === 0) {
      res.status(404).json({ message: "NOT found", data: usersSocialNetworks });
    }
  } catch (error) {
    throw new Error(error);
  }
};

// TODO: filtrar red social
export const filterSocialNetworks = async (req, res) => {
  // obtener la data del parametro del get
  const { username } = req.params;

  try {
    // buscar por su username en la db
    const renderDataByUsername = await networks.find({
      $text: {
        $search: username,
      },
    });

    // si no se ha encontrado coincidencias dar un 404
    if (!renderDataByUsername || renderDataByUsername.length === 0) {
      res
        .status(404)
        .json({ message: "No se encontró ningún usuario con ese nombre" });
    } else {
      res.status(200).json({ message: "Éxito", data: renderDataByUsername });
    }
  } catch (error) {
    throw new Error(error);
  }
};
