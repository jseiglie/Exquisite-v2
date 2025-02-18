const UserProfile = require("../class/userProfile.class.js");

const userProfileController = {};

userProfileController.create = async (req, res) => {
  try {
    const { userId, firstName, lastName, address, phoneNumber } = req.body;

    const resp = await UserProfile.createUserProfile(userId, firstName, lastName, address, phoneNumber);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

userProfileController.update = async (req, res) => {
  try {
    const { id, userId, firstName, lastName, address, phoneNumber } = req.body;

    const resp = await UserProfile.updateUserProfile(id, userId, firstName, lastName, address, phoneNumber);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

userProfileController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await UserProfile.deleteUserProfile(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = userProfileController;