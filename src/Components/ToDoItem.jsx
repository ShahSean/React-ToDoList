import React from "react";
import "./ToDoItem.css";

export default function ToDoItem(props) {
  return (
    <div className="toDoItem">
      <input type="checkbox" />
      <label> {props.toDo.text} </label>
      <button> delete</button>
    </div>
  );
}
