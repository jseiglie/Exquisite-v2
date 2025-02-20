const Employee = require("../class/employee.class.js");
const Position = require("../class/positions.class.js");
const Department = require("../class/department.class.js");
const Salary = require("../class/salary.class.js");
const employeeController = {};

employeeController.test = (req, res) => {
  res.status(200).send({ success: true, message: "employee controller works" });
};

employeeController.getAll = async (req, res) => {
  try {
    const resp = await Employee.getAllEmployees();
    if (!resp.success) throw new Error("error --//--> ", resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error("error --//--> ", error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

employeeController.getById = async (req, res) => {
  try {
    const resp = req.resource;
    const position = await Position.getPosition(req.resource.positionId);
    const department = await Department.getDepartment(
      req.resource.departmentId
    );
    const salary = await Salary.getSalary(req.resource.id);
    resp.dataValues.position = await position.position;
    resp.dataValues.department = await department.department;
    resp.dataValues.salary = await salary.salary;
    res.status(200).send(resp);
  } catch (error) {
    console.error("error --//--> ", error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

employeeController.create = async (req, res) => {
  try {
    const { userId, positionId, departmentId } = req.body;

    const resp = await Employee.createEmployee(
      userId,
      positionId,
      departmentId
    );
    if (!resp.success) throw new Error("error --//--> ", resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error("error --//--> ", error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

employeeController.update = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, positionId, departmentId } = req.body;

    const resp = await Employee.updateEmployee(
      id,
      userId,
      positionId,
      departmentId
    );
    if (!resp.success) throw new Error("error --//--> ", resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error("error --//--> ", error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

employeeController.delete = async (req, res) => {
  try {

    const resp = await Employee.deleteEmployee(req.params.id);
    if (!resp.success) throw new Error("error --//--> ", resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error("error --//--> ", error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = employeeController;
