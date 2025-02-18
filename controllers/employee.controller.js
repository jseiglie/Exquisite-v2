const Employee = require("../class/employee.class.js");

const employeeController = {};

employeeController.create = async (req, res) => {
  try {
    const { userId, positionId, departmentId } = req.body;

    const resp = await Employee.createEmployee(userId, positionId, departmentId);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

employeeController.update = async (req, res) => {
  try {
    const { id, userId, positionId, departmentId } = req.body;

    const resp = await Employee.updateEmployee(id, userId, positionId, departmentId);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

employeeController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await Employee.deleteEmployee(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = employeeController;