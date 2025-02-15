const sale = require("../class/sales.class.js");

const saleController = {};

saleController.test = async (req, res) => {
  console.log("-----SALE TESTING-----");

  try {
    res.send({ success: true, data: "test ok" });
  } catch (error) {
    console.error('error --//--> ', error);
    res.send({ success: false, Error: error.message });
  }
};

saleController.getAll = async (req, res) => {
  try {
    const resp = await sale.getAll();
    console.log(await resp);

    if (!resp.success) throw new Error('error --//--> ', resp.error);
    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

saleController.create = async (req, res) => {
  try {
    const data = req.body;

    const resp = await sale.createSale(data);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

saleController.update = async (req, res) => {
  try {
    const { id, data } = req.body;

    const resp = await sale.updateSale(id, data);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

saleController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await sale.deleteSale(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = saleController;