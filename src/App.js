import React, { useState } from "react";
import NavBar from "./Components/NavBar.jsx";
import ToDoContainer from "./Components/ToDoContainer.jsx";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState([
    { text: "this is a text", isDone: false, id: uuidv4() },
    { text: "Take out Trash", isDone: true, id: uuidv4() },
    { text: "vohoWooo", isDone: false, id: uuidv4() },
  ]);

  let addTaskHandler = (taskText) => {
    const newTask = [...toDo, { text: taskText, isDone: false, id: uuidv4() }];
    setToDo(newTask);
  };

  return (
    <div id="body-container">
      <h2 id="main-header"> To Do List </h2>
      <NavBar addTaskBtnHandler={addTaskHandler} />
      <ToDoContainer toDo={toDo} />
    </div>
  );
}

export default App;
