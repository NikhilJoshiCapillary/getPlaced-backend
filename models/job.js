const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    company: {
      type: "String",
      required: true,
    },

    profile: {
      type: "String",
      required: true,
    },

    package: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const job = mongoose.model("job", jobSchema);

module.exports = job;
