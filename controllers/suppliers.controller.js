const Suppliers = require("../class/suppliers.class.js");

const suppliersController = {};

suppliersController.create = async (req, res) => {
  try {
    const { name, email, address, landline, mobile, company } = req.body;

    const resp = await Suppliers.createSupplier(name, email, address, landline, mobile, company);
    if (!resp.success) throw new Error("error --//--> ", resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error("error --//--> ", error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

suppliersController.update = async (req, res) => {
  try {
    const { id, name, email, address, landline, mobile, company } = req.body;

    const resp = await Suppliers.updateSupplier(id, name, email, address, landline, mobile, company);
    if (!resp.success) throw new Error("error --//--> ", resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error("error --//--> ", error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

suppliersController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await Suppliers.deleteSupplier(id);
    if (!resp.success) throw new Error("error --//--> ", resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error("error --//--> ", error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = suppliersController;