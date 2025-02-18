const Department = require("../class/department.class.js");

const departmentController = {};

departmentController.test = async (req, res) => {
    console.log("-----CATEGORY TESTING-----");
  
    try {
      res.send({ success: true, data: "test ok" });
    } catch (error) {
      console.error('error --//--> ', error);
      res.send({ success: false, Error: error.message });
    }
  };

departmentController.create = async (req, res) => {
  try {
    const { name } = req.body;

    const resp = await Department.createDepartment(name);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

departmentController.update = async (req, res) => {
  try {
    const { id, name } = req.body;

    const resp = await Department.updateDepartment(id, name);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

departmentController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await Department.deleteDepartment(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = departmentController;