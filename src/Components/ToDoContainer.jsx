import React from "react";
import ToDoItem from "./ToDoItem.jsx";
import "./ToDoContainer.css";

export default function ToDoContainer(props) {
  return (
    <div id="to-do-container">
      <div>{addTaskHandler(props)}</div>
    </div>
  );
}

const addTaskHandler = (props) => {
  return props.toDo.map((toDo) => (
    <ToDoItem
      toDo={toDo}
      key={toDo.id}
      data-id={toDo.id}
      completedTask={props.completedTaskHandler}
    />
  ));
};
