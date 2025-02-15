const express = require("express");
const apiRoutes = express.Router();

const userControl = require("../controllers/users.controllers.js")
const auth = require('../middlewares/auth')

apiRoutes.get("/test", auth, userControl.test)
apiRoutes.post('/login', userControl.login)
apiRoutes.post('/register', userControl.register)
apiRoutes.get("/check", auth, userControl.check)
apiRoutes.get('/get_user', userControl.getUser)
apiRoutes.put('/avatar', auth, userControl.updateAvatar)

//mailer
// apiRoutes.post("/contact", mailer)


module.exports = apiRoutes