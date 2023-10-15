const { Favorite } = require("../db/connection");
const getAllFavorites = require("../handlers/getAllFavorites");

const deleteFav = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await Favorite.destroy({
      where: { id },
    });

    if (!response) return res.send({ message: "No se pudo eliminar" });
    else {
      const favorites = await getAllFavorites();
      return res.send(favorites);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = deleteFav;
