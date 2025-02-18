const Leaves = require("../class/leaves.class.js");

const leavesController = {};

leavesController.create = async (req, res) => {
  try {
    const { employeeId, startDate, endDate, reason, type } = req.body;

    const resp = await Leaves.createLeave(employeeId, startDate, endDate, reason, type);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

leavesController.update = async (req, res) => {
  try {
    const { id, employeeId, startDate, endDate, reason, type } = req.body;

    const resp = await Leaves.updateLeave(id, employeeId, startDate, endDate, reason, type);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

leavesController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await Leaves.deleteLeave(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = leavesController;