import React from "react";
import ToDoItem from "./ToDoItem.jsx";
import "./ToDoContainer.css";

export default function ToDoContainer(props) {
  return (
    <div id="to-do-container">
      <div>
        {/* {() => {
          if (props.toDo) addTaskHandler();
        }} */}
        {addTaskHandler(props)}
      </div>
    </div>
  );
}

const addTaskHandler = (props) => {
  return props.toDo.map((toDo) => (
    <ToDoItem
      dndHandler={props.dndHandler}
      toDo={toDo}
      key={toDo.id}
      completedTask={props.completedTaskHandler}
      delete={props.deleteHandler}
      toDoList={props.toDo}
    />
  ));
};
