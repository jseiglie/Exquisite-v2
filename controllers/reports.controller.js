const Reports = require("../class/reports.class.js");

const reportsController = {};

reportsController.create = async (req, res) => {
  try {
    const { title, content, employeeIds } = req.body;

    const resp = await Reports.createReport(title, content, employeeIds);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

reportsController.update = async (req, res) => {
  try {
    const { id, title, content, employeeIds } = req.body;

    const resp = await Reports.updateReport(id, title, content, employeeIds);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

reportsController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await Reports.deleteReport(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = reportsController;