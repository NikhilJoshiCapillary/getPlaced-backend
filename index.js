const express = require("express");
const cors = require("cors");

// const job = require("./models/job.js");
const bodyParser = require("body-parser");
const app = express();
const routes = require("./routes/index.js");
require("dotenv").config();
require("./config/db.js");

// add body parser to express
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/v1", routes);

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// app.post("/job", async (req, res) => {
//   console.log("*****req", typeof req.body, req.body);
//   const result = await job.create(req.body);
//   res.send({
//     result: result,
//   });
// });

// app.get("/job/:id", async (req, res) => {
//   const result = await job.findOne({ _id: req.params.id });
//   res.send({
//     result: result,
//   });
// });
// app.get("/alljobs", async (req, res) => {
//   const result = await job.find({});
//   console.log("*****res alljobs", result);

//   res.send({
//     result: result,
//   });
// });

app.get("/", (req, res) => {
  res.send("Hello World");
});
