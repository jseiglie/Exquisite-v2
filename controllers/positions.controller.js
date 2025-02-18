const Positions = require("../class/positions.class.js");

const positionsController = {};

positionsController.create = async (req, res) => {
  try {
    const { title } = req.body;

    const resp = await Positions.createPosition(title);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

positionsController.update = async (req, res) => {
  try {
    const { id, title } = req.body;

    const resp = await Positions.updatePosition(id, title);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

positionsController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await Positions.deletePosition(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = positionsController;