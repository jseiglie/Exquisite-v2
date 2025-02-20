const express = require("express");
const apiRoutes = express.Router();

const userControl = require("../controllers/users.controller.js")
const auth = require('../middlewares/auth')

apiRoutes.get("/test", userControl.test)
apiRoutes.post('/login', userControl.login)
apiRoutes.post('/register', userControl.register)
apiRoutes.get("/check", auth, userControl.check)
apiRoutes.get('/get_user', userControl.getUser)
apiRoutes.get('/all', auth,  userControl.getAll)
apiRoutes.delete('/delete/:id',  userControl.delete)

//mailer
// apiRoutes.post("/contact", mailer)


module.exports = apiRoutes