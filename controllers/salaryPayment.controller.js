const SalaryPayment = require("../class/salaryPayment.class.js");

const salaryPaymentController = {};

salaryPaymentController.create = async (req, res) => {
  try {
    const { salaryId, paymentDate } = req.body;

    const resp = await SalaryPayment.createSalaryPayment(salaryId, paymentDate);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

salaryPaymentController.update = async (req, res) => {
  try {
    const { id, salaryId, paymentDate } = req.body;

    const resp = await SalaryPayment.updateSalaryPayment(id, salaryId, paymentDate);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

salaryPaymentController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await SalaryPayment.deleteSalaryPayment(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = salaryPaymentController;