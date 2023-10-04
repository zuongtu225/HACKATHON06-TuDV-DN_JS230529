const Quizz = require("../configs/connect.DB");
require("dotenv").config();
class CategoryController {
  // GET ALL USERS
  GetAllCategory(req, res) {
    Quizz.query("SELECT * FROM category", (err, data) => {
      if (err) throw err;
      res.json({ sucess: true, message: "THANH CONG", data });
    });
  }
  // GET ONE
  GetOneCategory(req, res) {
    Quizz.query(
      `SELECT * FROM category WHERE id = ${req.params.id}`,
      (err, data) => {
        if (err) throw err;
        res.json({ sucess: true, message: "THANH CONG", data });
      }
    );
  }

  // ADD
  CreateCategory(req, res) {
    const newUser = req.body;
    const sql = "INSERT INTO category (name ) VALUES (?)";
    Quizz.query(sql, [newUser.name], (error, data) => {
      if (error) {
        res
          .status(504)
          .json({ success: false, message: "Thêm không thành công", error });
      } else {
        res
          .status(200)
          .json({ success: true, message: "Thêm thành công", data });
      }
    });
  }
  // PUT
  UpdateCategory(req, res) {
    const id = req.params.id;
    const body = req.body;
    const sql = "UPDATE category SET name = ?  WHERE id = ?";
    Quizz.query(sql, [body.name, id], (error, data) => {
      if (error) {
        console.log(error);
        res
          .status(504)
          .json({ sucess: false, message: "Cập nhật không thành công", error });
      } else {
        res.status(200).json({ sucess: true, message: "Cập nhật thành công" });
      }
    });
  }
  // // DELETE
  DeleteCategory(req, res) {
    const id = req.params.id;
    const sql = "DELETE FROM category WHERE id = ?";
    Quizz.query(sql, [id], (error, data) => {
      if (error) {
        console.log(error);
        res
          .status(504)
          .json({ sucess: false, message: "Xóa không thành công", error });
      } else {
        res.status(200).json({ sucess: true, message: "Xóa thành công" });
      }
    });
  }
  // GET BY CATEGORY
}
module.exports = new CategoryController();
