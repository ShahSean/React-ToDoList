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

  // Saving Values into Local Storage after any change on State
  // https://www.robinwieruch.de/local-storage-react
  // useEffect(() => {
  //   localStorage.setItem("toDo", JSON.stringify(toDo));
  // });

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

  let dndHandler =(fromIndex, toIndex) =>{
    const tempToDo = [...toDo];
    tempToDo.splice(toIndex, 0, tempToDo.splice(fromIndex, 1)[0]);
    setToDo(tempToDo);
  }
  let editTaskHandler = (id) =>{
    console.log("edit handler was called", id)
  }

  return (
    <div id="body-container">
      <h2 id="main-header"> To Do List </h2>
      <NavBar addTaskHandler={addTaskHandler} />
      <ToDoContainer
        toDo={toDo}
        editTaskHandler = {editTaskHandler}
        dndHandler={dndHandler}
        completedTaskHandler={completedTaskHandler}
        deleteHandler={deleteHandler}
      />
    </div>
  );
}

export default App;
