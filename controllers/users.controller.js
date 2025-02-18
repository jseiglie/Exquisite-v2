const Users = require("../class/users.class.js");

const userController = {};

userController.test = async (req, res) => {
  console.log(
    "---------------------------------------USER-------------TESTING-------------------------------------------"
  );

  try {
    res.send({ success: true, data: "test ok" });
  } catch (error) {
    console.error('error --//--> ', error);
    res.send({ success: false, Error: error.message });
  }
};

userController.getAll = async (req, res) => {
  try {
    const resp = await Users.getAll();
    console.log(await resp);

    if (!resp.success) throw new Error('error --//--> ', resp.error);
    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

userController.login = async (req, res) => {
  try {
    const { email, password, keepMeLogged } = req.body;

    if (email.trim().length < 6 || password.trim().length < 8)
      throw new Error("Credentials not correct");

    const resp = await Users.login(email, password, keepMeLogged);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

userController.register = async (req, res) => {
  try {
    const { email, password, keepMeLogged } = req.body;

    if (!email|| !password || email.trim().length < 6 || password.trim().length < 8)
      throw new Error("Credentials are not correct");

    const resp = await Users.register(email, password, keepMeLogged);
    if (!resp.success) throw new Error('error --//--> ', resp.error);
    res.status(201).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

userController.check = async (req, res) => {
  try {
    const id = req.user
    const resp = await  Users.getUser(id)
    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(400).send({ success: false, Error: error.message });
  }
};

userController.getUser = async (req, res) => {
  try {
    const id = req.user;
    const resp = await Users.getUser(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);
    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

userController.updateAvatar = async (req, res) => {
  try {
    const id = req.user
    const { url } = req.body;
    if (!url) throw new Error(" error --//--> Url not received");
    const resp = await Users.updateAvatar(url, id);
    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

userController.getUserId = async (req, res) => {
  try {
    const payload = req.body;


    const user = await Users.getId(payload.userId);
    if (!user) throw new Error("error --//--> User not found");

    res.status(200).send(user);
  } catch (error) {
    console.error(error.message);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = userController;