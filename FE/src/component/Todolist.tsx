import React, { useEffect, useState } from "react";
import { BsTrash } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";
import "../App.css";
function NoteApp() {
  interface notes {
    id: number;
    note: string;
  }
  const [note, setNote] = useState<string>("");
  const [listNotes, setListNotes] = useState<notes[]>([]);
  const addNote = async () => {
    const newNote = {
      note: note,
    };
    if (!note) {
      alert("Điền đủ thông tin note")
    } else {
      await axios.post("http://localhost:5000/create", newNote);
    }
    getAllNotes();
  };
  const deleleToDo = async (id: number) => {
    await axios.delete(`http://localhost:5000/${id}`);
    getAllNotes();
  };
  const getAllNotes = async  () => {
    const data = await axios.get("http://localhost:5000");
    setListNotes(data.data)
  } 
  useEffect(() => {
  getAllNotes();
  },[])
  
  return (
    <div className="wrapper">
      <header>
        <h3>Note App</h3>
      </header>
         <main>
        <div className="add ">
          <input
            value={note}
            type="text"
            placeholder="Add your note ...."
            onChange={(e) => setNote(e.target.value)}
          />
          <AiOutlinePlusCircle className="iconPLus" onClick={addNote}/>
        </div>
      </main>
      <footer>
        {listNotes.map((item) => {
          return (
            <div key={item.id} className="wrapper-item">
              <div className="item container">
                <p>
                  {item.note}
                </p>
                <div className="action">
                  <BsTrash
                    onClick={() => deleleToDo (item.id)}
                    className="icon"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </footer>
   
    </div>
  );
}
export default NoteApp;
