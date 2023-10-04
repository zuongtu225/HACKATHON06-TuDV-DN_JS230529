const Quizz = require("../configs/connect.DB");

require("dotenv").config();
class QuestionController {
  // GET ALL USERS
  GetAllQuestion(req, res) {
    Quizz.query("SELECT * FROM question", (err, data) => {
      if (err) throw err;
      res.json({ sucess: true, message: "THANH CONG", data });
    });
  }
  // GET ONE
  GetOneQuestion(req, res) {
    Quizz.query(
      `SELECT * FROM question WHERE id = ${req.params.id}`,
      (err, data) => {
        if (err) throw err;
        res.json({ sucess: true, message: "THANH CONG", data });
      }
    );
  }
  // ADD
  CreateQuestion(req, res) {
    const { content, level, categoryID } = req.body;
    console.log("Xxx");
    const sql =
      "INSERT INTO question (content,level,categoryID ) VALUES (?,?,?)";
    Quizz.query(sql, [content, level, categoryID], (error, data) => {
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
  // GET QUESTION AND ANSWER
  GetQuestionAnswer(req, res) {
    Quizz.query(
      `SELECT 
        question.id, question.content AS question_content, 
        answer.content AS answer_content, answer.is_answer
      FROM question
      JOIN answer ON question.id = answer.questionID
      WHERE question.id = ?`,
      [req.params.id],
      (err, data) => {
        if (err) throw err;
        res.json({ sucess: true, message: "THANH CONG", data });
      }
    );
  }
  // PUT
  //   UpdateQuestion(req, res) {
  //     const id = req.params.id;
  //     const body = req.body;
  //     const sql = "UPDATE question SET name = ?  WHERE id = ?";
  //     Quizz.query(sql, [body.name, id], (error, data) => {
  //       if (error) {
  //         console.log(error);
  //         res
  //           .status(504)
  //           .json({ sucess: false, message: "Cập nhật không thành công", error });
  //       } else {
  //         res.status(200).json({ sucess: true, message: "Cập nhật thành công" });
  //       }
  //     });
  //   }
  //   // // DELETE
  //   DeleteQuestion(req, res) {
  //     const id = req.params.id;
  //     const sql = "DELETE FROM question WHERE id = ?";
  //     Quizz.query(sql, [id], (error, data) => {
  //       if (error) {
  //         console.log(error);
  //         res
  //           .status(504)
  //           .json({ sucess: false, message: "Xóa không thành công", error });
  //       } else {
  //         res.status(200).json({ sucess: true, message: "Xóa thành công" });
  //       }
  //     });
  //   }
}
module.exports = new QuestionController();
