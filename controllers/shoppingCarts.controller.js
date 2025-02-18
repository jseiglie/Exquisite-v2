const ShoppingCart = require("../class/shoppingCarts.class.js");

const shoppingCartController = {};

shoppingCartController.test = async (req, res) => {
  console.log("-----SHOPPING CART TESTING-----");

  try {
    res.send({ success: true, data: "test ok" });
  } catch (error) {
    console.error('error --//--> ', error);
    res.send({ success: false, Error: error.message });
  }
};

shoppingCartController.getAll = async (req, res) => {
  try {
    const resp = await ShoppingCart.getAll();
    console.log(await resp);

    if (!resp.success) throw new Error('error --//--> ', resp.error);
    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

shoppingCartController.create = async (req, res) => {
  try {
    const data = req.body;

    const resp = await ShoppingCart.createShoppingCart(data);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

shoppingCartController.update = async (req, res) => {
  try {
    const { id, data } = req.body;

    const resp = await ShoppingCart.updateShoppingCart(id, data);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

shoppingCartController.delete = async (req, res) => {
  try {
    const { id } = req.body;

    const resp = await ShoppingCart.deleteShoppingCart(id);
    if (!resp.success) throw new Error('error --//--> ', resp.error);

    res.status(200).send(resp);
  } catch (error) {
    console.error('error --//--> ', error);
    res.status(418).send({ success: false, Error: error.message });
  }
};

module.exports = shoppingCartController;