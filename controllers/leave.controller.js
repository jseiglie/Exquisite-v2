const Leave = require("../class/leave.class.js");

const leaveController = {};


leaveController.create = async (req, res) => {
  try {
    const { employeeId, startDate, endDate, reason, type } = req.body;

    const resp = await Leave.createLeave(
      employeeId,
      startDate,
      endDate,
      reason,
      type
    );
    if (!resp.success) throw new Error("error --//--> ", resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error("error --//--> ", error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

leaveController.update = async (req, res) => {
  try {
    const { id, employeeId, startDate, endDate, reason, type } = req.body;

    const resp = await Leave.updateLeave(
      id,
      employeeId,
      startDate,
      endDate,
      reason,
      type
    );
    if (!resp.success) throw new Error("error --//--> ", resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error("error --//--> ", error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

leaveController.update = async (req, res) => {
  try {
    const { id, employeeId, startDate, endDate, reason, type } = req.body;

    const resp = await Leave.updateLeave(
      id,
      employeeId,
      startDate,
      endDate,
      reason,
      type
    );
    if (!resp.success) throw new Error("error --//--> ", resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error("error --//--> ", error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = leaveController;