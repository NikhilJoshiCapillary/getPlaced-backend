const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  applied_jobs: {
    type: Array,
    required: false,
  },
});

const user = mongoose.model("user", userSchema);
module.exports = user;
