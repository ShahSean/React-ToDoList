import React, { useState } from "react";
import NavBar from "./Components/NavBar.jsx";
import ToDoContainer from "./Components/ToDoContainer.jsx";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState([
    { text: "this is a text", isDone: false, id: uuidv4() },
    { text: "Take out Trash", isDone: true, id: uuidv4() },
    { text: "This is a simple Task", isDone: false, id: uuidv4() },
  ]);
  let addTaskHandler = (taskText) => {
    const newTask = [...toDo, { text: taskText, isDone: false, id: uuidv4() }];
    setToDo(newTask);
  };

  // let completedTaskHandler = (index) => {
  //   const newToDo = [...toDo];
  //   newToDo.map((todo) => {
  //     if (todo.id === index) todo.isDone = !todo.isDone;
  //     console.log("todoID: ", todo.id, "  cmplt-index:", index);
  //   });
  //   // setToDo(newToDo);
  //   console.log("This is the ID: ", index);
  // };

  let completedTaskHandler = (e) => {
    console.log("I was marked", e, " boo: ", e.traget.dataset.id);
  };
  return (
    <div id="body-container">
      <h2 id="main-header"> To Do List </h2>
      <NavBar addTaskHandler={addTaskHandler} />
      <ToDoContainer
        toDo={toDo}
        data-id={toDo.id}
        completedTaskHandler={completedTaskHandler}
      />
    </div>
  );
}

export default App;
