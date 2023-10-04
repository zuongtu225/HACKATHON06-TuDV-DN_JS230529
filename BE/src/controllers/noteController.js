const Notes = require("../models/notes.model");
require("dotenv").config();
class NotesController {
  // GET ALL Users
  async getAllNotes(req, res) {
    try {
      const listNote = await Notes.findAll();
      res.json(listNote);
    } catch (error) {
      res.status(500).json({ message: "THẤT BẠI", error });
    }
  }
  async getOneNote(req, res) {
    const id = req.params.id;
    try {
      const note = await Notes.findOne({
        where: { id: id },
      });
      res.json(note);
    } catch (error) {
      res.status(500).json({ message: "THẤT BẠI", error });
    }
  }
  async createNote(req, res) {
    try {
      const listNote = await Notes.create({ note: req.body.note });
      res.json(listNote);
    } catch (error) {
      res.status(500).json({ message: "THẤT BẠI", error });
    }
  }
  // UPDATE
  async updateNote(req, res) {
    try {
      const id = req.params.id;
      const note = req.body.note;
      await Notes.update({ note: note }, { where: { id: id } });
      res.json({ message: "Cập nhật thành công" });
    } catch (error) {
      res.json({ message: "Cập nhật thất bại", error });
    }
  }
  // DELETE
  async deleteNote(req, res) {
    const id = req.params.id;
    try {
      const task = await Notes.findOne({ where: { id: id } });
      console.log(task);
      if (task) {
        await task.destroy();
        res.json({ message: "Xóa Thành Công" });
      } else {
        res.status(404).json({ error: "Task not found" });
      }
    } catch (error) {
      res.status(500).json({ error: "Failed to delete task" });
    }
  }
}
module.exports = new NotesController(); // phải xuất kiểu này
