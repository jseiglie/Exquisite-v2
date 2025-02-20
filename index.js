'use strict';
require('dotenv').config()
const express = require("express");
const { createServer } = require('node:http');
const { join } = require('node:path');
const path = require('path');
const cors = require("cors");
//const { sequelize } = require('./config/index1.js'); // Asegúrate de usar la ruta correcta
const sequelize = require('./config/index.js');

const router = express.Router();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

//models import
const User = require('./models/users');
const Inventory = require('./models/inventory');
const Category = require('./models/categories');
const Subcategory = require('./models/subcategories');
const ShoppingCart = require('./models/shoppingCarts');
const Favorites = require('./models/favorites');
const Sales = require('./models/sales');


const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json({limit: '5mb'}));
app.use(express.urlencoded({limit: '5mb', extended: true}));
app.use(express.static(path.join(__dirname, './client/build')));
app.use(bodyParser.json());



//router config
app.use('/api', router);
app.use('/api/users', require('./routes/users.routes.js'));
app.use('/api/inventory', require('./routes/inventory.routes.js'));
app.use('/api/category', require('./routes/categories.routes.js'));
app.use('/api/subcategory', require('./routes/subcategories.routes.js'));
app.use('/api/shopping_cart', require('./routes/shoppingCarts.routes.js'));
app.use('/api/favorite', require('./routes/favorites.routes.js'));
app.use('/api/sale', require('./routes/sales.routes.js'));
app.use('/api/log', require('./routes/logs.routes.js'));
app.use('/api/sales_inventory', require('./routes/salesInventory.routes.js'));
app.use('/api/attendance', require('./routes/attendance.routes.js'));
app.use('/api/brand', require('./routes/brands.routes.js'));
app.use('/api/departments', require('./routes/departments.routes.js'));
app.use('/api/employee', require('./routes/employees.routes.js'));
app.use('/api/leave', require('./routes/leaves.routes.js'));
app.use('/api/leave_balance', require('./routes/leaveBalance.routes.js'));
app.use('/api/position', require('./routes/positions.routes.js'));
app.use('/api/salary', require('./routes/salary.routes.js'));
app.use('/api/salary_payment', require('./routes/salaryPayment.routes.js'));
app.use('/api/user_profile', require('./routes/userProfile.routes.js'));
app.use('/api/report', require('./routes/reports.routes.js'));
app.use('/api/supplier', require('./routes/suppliers.routes.js'));
app.use('api/inventory_movement', require('./routes/inventoryMovement.routes.js'));

const sequelizeOptions = {};


if (!process.env.PROD) {
    sequelizeOptions.alter = true;
}

sequelizeOptions.force = true;


app.get('*', (req, res) => {
    res.sendFile(join(__dirname, './client/build/index.html'));
  });

server.listen(3000, async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }  
  console.log('server running at http://localhost:3000');
});