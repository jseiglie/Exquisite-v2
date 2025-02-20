/*
La ruta tiene que tener el nombre de la tabla (api/category) 
o transformar al nombre de la ruta al de la tabla (shopping_cart --> shoppingCarts)
para que funcione.
*/


const model = require("../models/index")
const resourceCheck = {};

resourceCheck.getModel = (url) => { 
let table = url.split("/")[2];
return  table.charAt(0).toUpperCase() + table.slice(1);
}
resourceCheck.checkId = async (req, res, next) => {
    let table = resourceCheck.getModel(req.originalUrl);    
    const check = await model[table].findOne({where: {id: req.params.id}})
    console.log(check);
    
    if (!check) {
        return res.status(404).json({ message: `${table} not found` });
    }
    req.resource = check;
    next();
 };

resourceCheck.exists = async (req, res, next) => {
    let table = resourceCheck.getModel(req.originalUrl);    
    const check = await model[table].findOne({where: {name: req.body.name}})   
     
    if (check) {
        return res.status(400).json({ message: `${table} already exists` });
    }
    next();
 };



module.exports = resourceCheck;