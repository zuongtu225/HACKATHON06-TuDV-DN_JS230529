const express = require("express");
require("dotenv").config();
const cors = require("cors");
const port = process.env.APP_PORT || 6000;

const Notes = require("./src/models/notes.model");
Notes.sync().then(() => {
  console.log("Tạo bảng thành công");
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
const route = require("./src/router/index");
route(app);
// require("./src/configs/connect.DB");

app.listen(port, () => {
  console.log(`WWEB http://localhost:${port}/`);
});
