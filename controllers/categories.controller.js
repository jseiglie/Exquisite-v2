const category = require("../class/categories.class.js");

const categoryController = {};

categoryController.test = async (req, res) => {
  console.log("-----CATEGORY TESTING-----");

  try {
    res.send({ success: true, data: "test ok" });
  } catch (error) {
    console.error('error --//--> ', error);
    res.send({ success: false, Error: error.message });
  }
};

categoryController.getAll = async (req, res) => {
  try {
    const resp = await category.getAll();
    console.log(await resp);

    if (!resp.success) throw new Error('error --//--> ', resp.error);
    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

categoryController.getById = async (req, res) => {
  try {
   
    res.status(200).send(req.resource);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};
categoryController.create = async (req, res) => {
  try {
    const { name } = req.body;

    const resp = await category.createCategory(name);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

categoryController.update = async (req, res) => {
  try {
    const { id, name } = req.body;

    const resp = await category.updateCategory(id, name);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

categoryController.delete = async (req, res) => {
  try {

    const resp = await category.deleteCategory(req.params.id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = categoryController;