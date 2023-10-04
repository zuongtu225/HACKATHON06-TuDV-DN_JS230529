const express = require("express");
const questionRouter = express.Router();

const questionController = require("../controllers/questionController");

questionRouter.get("/", questionController.GetAllQuestion);
questionRouter.get("/:id", questionController.GetOneQuestion);
questionRouter.post("/", questionController.CreateQuestion);
questionRouter.get("/:id/answer", questionController.GetQuestionAnswer);
module.exports = questionRouter;
