import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar.jsx";
import ToDoContainer from "./Components/ToDoContainer.jsx";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState(localStorage.getItem("toDo") || "");

  // Saving Values into Local Storage after any change on State
  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDo));
  });

  let addTaskHandler = (taskText) => {
    const newTask = [...toDo, { text: taskText, isDone: false, id: uuidv4() }];
    setToDo(newTask);
  };

  let completedTaskHandler = (id) => {
    const newToDo = [...toDo];
    newToDo.map((todo) => {
      if (todo.id === id) todo.isDone = !todo.isDone;
    });
    setToDo(newToDo);
  };

  let deleteHandler = (id) => {
    const tempToDo = [...toDo];
    tempToDo.filter((toDo) => toDo.id === id);
    tempToDo.map((todo, index) => {
      if (todo.id === id) tempToDo.splice(index, 1);
    });
    setToDo(tempToDo);
  };

  return (
    <div id="body-container">
      <h2 id="main-header"> To Do List </h2>
      <NavBar addTaskHandler={addTaskHandler} />
      <ToDoContainer
        toDo={toDo}
        completedTaskHandler={completedTaskHandler}
        deleteHandler={deleteHandler}
      />
    </div>
  );
}

export default App;
