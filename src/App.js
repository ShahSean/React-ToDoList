import React, {useState} from 'react';
import NavBar from "./Components/NavBar.jsx"
import ToDoContainer from "./Components/ToDoContainer.jsx"
import "./App.css"



function App() {
  const [toDo, setToDo] = useState([{text: "this is a text", isDone: false},{text: "Take out Tr", isDone: true},{text: "vohoWooo", isDone: false}])
  return (
    <div id="body-container" >
      <h2 id="main-header"> To Do List </h2>
      <NavBar />
      <ToDoContainer toDoText={toDo.map((todo) => todo.text)}/>
    </div>
    
  );
}

export default App;
