const express = require("express"); // để dùng app,use()
express.Router();
const categoryRouter = require("./category");
const questionRouter = require("./question");

function route(app) {
  app.use("/api/v1/category", categoryRouter);
  app.use("/api/v1/questions", questionRouter);
}
module.exports = route;
