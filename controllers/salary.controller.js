const Salary = require("../class/salary.class.js");

const salaryController = {};

salaryController.create = async (req, res) => {
  try {
    const { employeeId, amount, date } = req.body;

    const resp = await Salary.createSalary(employeeId, amount, date);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

salaryController.update = async (req, res) => {
  try {
    const { id, employeeId, amount, date } = req.body;

    const resp = await Salary.updateSalary(id, employeeId, amount, date);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

salaryController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await Salary.deleteSalary(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = salaryController;