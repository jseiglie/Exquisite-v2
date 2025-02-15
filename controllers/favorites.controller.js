const favorite = require("../class/favorites.class.js");

const favoriteController = {};

favoriteController.test = async (req, res) => {
  console.log("-----FAVORITE TESTING-----");

  try {
    res.send({ success: true, data: "test ok" });
  } catch (error) {
    console.error('error --//--> ', error);
    res.send({ success: false, Error: error.message });
  }
};

favoriteController.getAll = async (req, res) => {
  try {
    const resp = await favorite.getAll();
    console.log(await resp);

    if (!resp.success) throw new Error('error --//--> ', resp.error);
    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

favoriteController.create = async (req, res) => {
  try {
    const data = req.body;

    const resp = await favorite.createFavorite(data);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

favoriteController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await favorite.deleteFavorite(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = favoriteController;