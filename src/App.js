import React, { useState} from "react";
import NavBar from "./Components/NavBar.jsx";
import ToDoContainer from "./Components/ToDoContainer.jsx";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

function App() {
  const [toDo, setToDo] = useLocalStorage("toDo", []);

  // Custom Hook to handle Local Storage
  // https://usehooks.com/useLocalStorage/
function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.log(error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = value => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

  let addTaskHandler = (taskText) => {
    const newTask = [...toDo, { text: taskText, isDone: false, id: uuidv4() }];
    setToDo(newTask);
  };

  let completedTaskHandler = (id) => {
    const newToDo = [...toDo];
    newToDo.forEach((todo) => {
      if (todo.id === id) { 
        todo.isDone = !todo.isDone;
      }
    });
    setToDo(newToDo);
  };

  let deleteHandler = (id) => {
    const tempToDo = [...toDo];
    tempToDo.forEach((todo, index) => {
      if (todo.id === id) tempToDo.splice(index, 1);
    });
    setToDo(tempToDo);
  };

  let dndHandler =(fromIndex, toIndex) =>{
    const tempToDo = [...toDo];
    tempToDo.splice(toIndex, 0, tempToDo.splice(fromIndex, 1)[0]);
    setToDo(tempToDo);
  }

  let editTaskHandler = (id, value) =>{
    const tempToDo = [...toDo];
    tempToDo.forEach((todo, index) => {
      if (todo.id === id) todo.text = value;
    });
    setToDo(tempToDo);
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
