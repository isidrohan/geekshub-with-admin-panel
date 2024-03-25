const bcrypt = require("bcrypt");
const User = require("../models/user-model");

const home = async (req, res) => {
  try {
    res.status(200).send("GET request to the homepage");
  } catch (error) {
    console.log(error);
  }
};

// *********************
// *   register user   *
// *********************

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // check user with the same email already exists or not
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User Already Exists" });
    }
    // create new user
    const userCreated = await User.create({ username, email, phone, password });
    res
      .status(200)
      .send({
        message: userCreated,
        token: await userCreated.generateToken(),
        userID: userCreated._id.toString(),
      });
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};


// *********************
// *     login logic   *
// *********************
const login = async (req, res) => {
  const { email, password } = req.body;

  const userExist = await User.findOne({ email });
  if (!userExist) {
    return res.status(400).json({ msg: "user not exists , register first " });
  }

  const user = await bcrypt.compare(password, userExist.password);
  if (user) {
    res
      .status(200)
      .json({
        message: userExist,
        token: await userExist.generateToken(),
        userID: userExist._id.toString(),
      });
  }else{
    return res.status(401).json({msg: "invalid Credential"});
  }
};


// ****************************************
// *     to send user data - user logic   *
// ****************************************

const user = async(req,res) =>{
    try {
      const userData = await req.user;
      return res.status(200).json(userData);
    } catch (error) {
      console.log(`error form user route ${error}`)
    }
}
module.exports = { home, register, login, user };
