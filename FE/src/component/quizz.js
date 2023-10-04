import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";
import "../App.css";
function Quizz() {
  const [data, setData] = useState();
  const getAllQuestion = async () => {
    const data = await axios.get("http://localhost:6000/api/v1/questions");
    setData(data.data);
  };
  console.log(data);
  useEffect(() => {
    getAllQuestion();
  }, []);
  return (
    <div className="wrapper">
      <header>
        <h3>Quizz</h3>
      </header>
    </div>
  );
}
export default Quizz;
