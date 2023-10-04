const express = require("express");
const noteRouter = express.Router();

const NotesController = require("../controllers/noteController");

noteRouter.get("/", NotesController.getAllNotes);
noteRouter.get("/:id", NotesController.getOneNote);
noteRouter.post("/create", NotesController.createNote);
noteRouter.put("/:id", NotesController.updateNote);
noteRouter.delete("/:id", NotesController.deleteNote);

module.exports = noteRouter;
