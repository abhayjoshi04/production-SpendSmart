const userModel = require("../models/userModel");

//login callback
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      return res.status(404).send("Invalid credentials");
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Login failed. Please try again later.",
    });
  }
};
//register callback
const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save();
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    //console.error("Registration error:", error);
    res.status(400).json({
      success: false,
      message: "Registration failed. Please try again.",
      //error: error.message, 
    });
  }
};

module.exports = { loginController, registerController };
