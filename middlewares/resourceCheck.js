const model = require("../models/index")
const resourceCheck = {};

resourceCheck.getModel = (url) => { 
let table = url.split("/")[2];
return  table.charAt(0).toUpperCase() + table.slice(1);
}
resourceCheck.checkId = async (req, res, next) => {
    let table = resourceCheck.getModel(req.originalUrl);    
    const check = await model[table].findAll({where: {id: req.params.id}})
    if (!check) {
        return res.status(404).json({ message: `${table} not found` });
    }
    next();
 };

resourceCheck.exists = async (req, res, next) => {
    let table = resourceCheck.getModel(req.originalUrl);    
    const check = await model[table].findAll({where: {name: req.body.name}})    
    if (check.length > 0) {
        return res.status(400).json({ message: `${table} already exists` });
    }
    next();
 };



module.exports = resourceCheck;