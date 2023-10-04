const express = require("express");
const categoryRouter = express.Router();

const categoryController = require("../controllers/categoryController");

categoryRouter.get("/", categoryController.GetAllCategory);
categoryRouter.get("/:id", categoryController.GetOneCategory);
categoryRouter.post("/", categoryController.CreateCategory);
categoryRouter.put("/:id", categoryController.UpdateCategory);
categoryRouter.delete("/:id", categoryController.DeleteCategory);

module.exports = categoryRouter;
