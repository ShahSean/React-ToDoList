import React, {useState} from 'react';
import NavBar from "./Components/NavBar.jsx"
import ToDoContainer from "./Components/ToDoContainer.jsx"
import "./App.css"



function App() {
  const [toDo, setToDo] = useState(
    [
      {text: "this is a text", isDone: false},
      {text: "Take out Trash", isDone: true},
      {text: "vohoWooo", isDone: false}
    ])

    let addTaskHandler = (taskText) =>{
      const newTask = [...toDo, {text: taskText, isDone: false}]
      setToDo(newTask);
      toDo.map((todo) => console.log(todo));
      
    }


  return (
    <div id="body-container" >
      <h2 id="main-header"> To Do List </h2>
      <NavBar addTaskBtnHandler={addTaskHandler}/>
      <ToDoContainer toDo={toDo}/>
    </div>
    
  );
}



export default App;
