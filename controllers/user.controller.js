const User = require("../models/user.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  registerUser: async (req, res) => {
    const newUser = new User(req.body);
    const email = newUser.email;
    newUser.password = await bcrypt.hash(req.body.password, 10);

    try {
      const exisitingUser = await User.findOne({ email });
      if (exisitingUser) {
        return res.status(400).send("User email already exists");
      }
      const result = await newUser.save();
      result.password = undefined;
      return res.status(200).json({ message: "Success", data: result });
    } catch (err) {
      console.error("Error registering user:", err);
      return res
        .status(500)
        .json({ message: "Internal server error", data: err });
    }
  },

  loginUser: async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
      const isMatch = await bcrypt.compare(req.body.password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "User not found" });
      }
      const tokenObject = {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
      };

      const jwtToken = jwt.sign(tokenObject, process.env.SECRET, {
        expiresIn: "4h",
      });
      return res.status(200).json({ jwtToken, tokenObject });
    } catch (err) {
      return res.status(500).json({ message: "Internal server", err });
    }
  },

  getAppliedJobsArray: async (req, res) => {
    const user_email = req.params.email;
    try {
      const result = await User.findOne({ email: user_email });
      return res.status(200).send({ result: result.applied_jobs });
    } catch (error) {
      return res.status(500).json({ message: "Internal server" });
    }
  },
};
