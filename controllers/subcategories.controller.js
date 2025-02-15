const subcategory = require("../class/subcategories.class.js");

const subcategoryController = {};

subcategoryController.test = async (req, res) => {
  console.log("-----SUBCATEGORY TESTING-----");

  try {
    res.send({ success: true, data: "test ok" });
  } catch (error) {
    console.error('error --//--> ', error);
    res.send({ success: false, Error: error.message });
  }
};

subcategoryController.getAll = async (req, res) => {
  try {
    const resp = await subcategory.getAll();
    console.log(await resp);

    if (!resp.success) throw new Error('error --//--> ', resp.error);
    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

subcategoryController.create = async (req, res) => {
  try {
    const { name } = req.body;

    const resp = await subcategory.createSubcategory(name);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

subcategoryController.update = async (req, res) => {
  try {
    const { id, name } = req.body;

    const resp = await subcategory.updateSubcategory(id, name);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

subcategoryController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await subcategory.deleteSubcategory(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = subcategoryController;