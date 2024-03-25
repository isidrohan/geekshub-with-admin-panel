const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authMiddleware = async(req, res, next) => {
  const token = req.header("Authorization");

  // console.log(token);

  if (!token) {
    return res.status(401).json({ msg: "Unauthorized HTTP , Token not found" });
  }

  try {
    const isVerify = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userData = await User.findOne({ email: isVerify.email }).select({ 
        password: 0,
     }); 
    // console.log(userData);

    req.user = userData;
    req.token = token;
    req.userId = userData._id;
    
    next();

  } catch (error) {
    return res.status(401).json({ msg: "unauthorized token " });
  }
};

module.exports = authMiddleware;
