import React from 'react';
import NavBar from "./Components/Navbar/NavBar.jsx"
import ToDoContainer from "./Components/ToDoContainer/ToDoContainer.jsx"
import "./App.css"



function App() {
  return (
    <div id="body-container" >
      <h2 id="main-header"> To Do List </h2>
      <NavBar />
      <ToDoContainer />
    </div>
    
  );
}

export default App;
