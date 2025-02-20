/*
Added to the request object:
user: the user object from the database
token: the decoded JWT token
*/


const jwt = require("jsonwebtoken");
const model = require("../models/index").Users;
const UserProfileClass = require("../class/userProfile.class.js");
const EmployeeClass = require("../class/employee.class.js");

// Secret key for JWT
const JWT_SECRET =
  process.env.JWT_SECRET ||
  "Pw#u=z>y9Cq@s7+Fk3LZGVe<}&-AdBW?./h!;%8$nx]H~*S6rv";

// Middleware to check JWT
const authMiddleware = (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.headers["authorization"]?.split(" ")[1]; // Bearer token

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Verify the token
  jwt.verify(token, JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }

    // Token is valid, attach user info to request object
    const currentUser = await model.findByPk(decoded.id);
    if (currentUser.dataValues.role === "user") {
      const userProfile = await UserProfileClass.getUserProfile(currentUser.id);
      currentUser.dataValues.profile = userProfile.userProfile.dataValues;
    }
    if (
      currentUser.role === "seller" ||
      currentUser.role === "admin" ||
      currentUser.role === "company"
    ) {
      const employee = await EmployeeClass.getEmployee(currentUser.id);
      currentUser.dataValues.profile = employee.employee.dataValues;
    }
    if (!currentUser) {
      return res.status(401).json({ message: "User not found" });
    }
    req.user = currentUser;
    req.token = decoded;
    next();
  });
};

module.exports = authMiddleware;
