const Log = require("../class/logs.class.js");

const logController = {};

logController.test = async (req, res) => {
  console.log("-----LOG TESTING-----");

  try {
    res.send({ success: true, data: "test ok" });
  } catch (error) {
    console.error('error --//--> ', error);
    res.send({ success: false, Error: error.message });
  }
};

logController.getAll = async (req, res) => {
  try {
    const resp = await Log.getAll();
    console.log(await resp);

    if (!resp.success) throw new Error('error --//--> ', resp.error);
    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

logController.create = async (req, res) => {
  try {
    const data = req.body;

    const resp = await Log.createLog(data);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

logController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await Log.deleteLog(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = logController;