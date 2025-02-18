const Attendance = require("../class/attendance.class.js");

const attendanceController = {};

attendanceController.create = async (req, res) => {
  try {
    const { employeeId, date, status } = req.body;

    const resp = await Attendance.createAttendance(employeeId, date, status);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

attendanceController.update = async (req, res) => {
  try {
    const { id, employeeId, date, status } = req.body;

    const resp = await Attendance.updateAttendance(id, employeeId, date, status);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

attendanceController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await Attendance.deleteAttendance(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = attendanceController;