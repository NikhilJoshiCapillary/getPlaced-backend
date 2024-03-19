const job = require("../models/job.js");
const user = require("../models/user.js");
const mongoose = require("mongoose");

module.exports = {
  getAllJobs: async (req, res) => {
    try {
      const dataset = await job.find();
      return res.send({ result: dataset });
    } catch (e) {
      console.log("error found", e);
    }
  },

  addNewJob: async (req, res) => {
    try {
      const newJob = new job({
        id: req.body.id,
        company: req.body.company,
        profile: req.body.profile,
        package: req.body.package,
      });
      const result = await newJob.save();
      return res.send({ result: result });
    } catch (e) {
      console.log("error found", e);
    }
  },

  applyJob: async (req, res) => {
    const job_id = req.params.id;
    const user_email = String(req.params.email);

    try {
      await user.updateOne(
        { email: user_email },
        {
          $push: { applied_jobs: job_id },
        }
      );
      res.status(200).send({
        message: "Applied for Job successfully",
        jobId: job_id,
        user_email: user_email,
      });
    } catch (e) {
      console.log(e, "Failed to apply for the job");
    }
  },
};
