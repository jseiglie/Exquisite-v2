const jwt = require('jsonwebtoken');
const model = require("../models/index").Users;
// Replace with your own secret key
const JWT_SECRET = process.env.JWT_SECRET || 'Pw#u=z>y9Cq@s7+Fk3LZGVe<}&-AdBW?./h!;%8$nx]H~*S6rv';

// Middleware to check JWT
const authMiddleware =  (req, res, next) => {
  // Get the token from the Authorization header
  const token = req.headers['authorization']?.split(' ')[1]; // Bearer token

  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Verify the token
  jwt.verify(token, JWT_SECRET, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    
    // Token is valid, attach user info to request object
    const currentUser = await model.findByPk(decoded.id);

    if (!currentUser) {
      return res.status(401).json({ message: 'User not found' });
    }
    req.user = currentUser;
    next();
  });
};

module.exports = authMiddleware;