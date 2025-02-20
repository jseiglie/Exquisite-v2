const Brand = require("../class/brands.class.js");

const brandController = {};

brandController.test = async (req, res) => {
  console.log("-----CATEGORY TESTING-----");

  try {
    res.send({ success: true, data: "test ok" });
  } catch (error) {
    console.error("error --//--> ", error);
    res.send({ success: false, Error: error.message });
  }
};

brandController.getAll = async (req, res) => {
  try {
    const brands = await Brand.getBrands();
    res.status(200).json(brands);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

brandController.create = async (req, res) => {
  try {
    const brand = await Brand.createBrand(req.body.name);
    res.status(201).json(brand);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

brandController.getById = async (req, res) => {
  try {
    res.status(200).json(req.resource);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

brandController.update = async (req, res) => {
  try {
    if (req.body.name === req.resource.name) { 
      return res.status(400).json({ error: "Brand name is the same" });
    }

    const [updated] = await Brand.updateBrand(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedBrand = await Brand.findByPk(req.params.id);
      res.status(200).json(updatedBrand);
    } else {
      res.status(404).json({ error: "Brand not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

brandController.delete = async (req, res) => {
  try {
    const deleted = await Brand.deleteBrand({
      where: { id: req.params.id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Brand not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = brandController;
