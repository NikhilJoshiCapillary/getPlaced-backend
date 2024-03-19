const express = require("express");
const {
  registerUser,
  loginUser,
  getAppliedJobsArray,
} = require("../controllers/user.controller");
const {
  userRegisterValidate,
  userLoginValidate,
} = require("../utils/userValidation");
const {
  getAllJobs,
  addNewJob,
  applyJob,
  getAppliedCompanyName,
} = require("../controllers/job.controller");
const routes = express.Router();

routes.post("/register", userRegisterValidate, registerUser);
routes.post("/login", userLoginValidate, loginUser);
routes.get("/alljobs", getAllJobs);
routes.post("/newjob", addNewJob);
routes.post("/job/:id/:email", applyJob);
routes.get("/user/:email", getAppliedJobsArray);

module.exports = routes;
