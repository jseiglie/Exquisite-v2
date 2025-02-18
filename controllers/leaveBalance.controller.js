const LeaveBalance = require("../class/leaveBalance.class.js");

const leaveBalanceController = {};

leaveBalanceController.create = async (req, res) => {
  try {
    const { employeeId, totalLeaveDays, remainingLeaveDays } = req.body;

    const resp = await LeaveBalance.createLeaveBalance(employeeId, totalLeaveDays, remainingLeaveDays);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

leaveBalanceController.update = async (req, res) => {
  try {
    const { id, employeeId, totalLeaveDays, remainingLeaveDays } = req.body;

    const resp = await LeaveBalance.updateLeaveBalance(id, employeeId, totalLeaveDays, remainingLeaveDays);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

leaveBalanceController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await LeaveBalance.deleteLeaveBalance(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = leaveBalanceController;