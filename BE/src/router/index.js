const express = require("express"); // để dùng app,use()
express.Router();
const userRouter = require("./notes");

function route(app) {
  app.use("/", userRouter);
}
module.exports = route;
