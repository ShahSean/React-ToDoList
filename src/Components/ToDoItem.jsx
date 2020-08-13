import React from "react";
import "./ToDoItem.css";

export default function ToDoItem(props) {
  return (
    <div className="toDoItem">
      <input
        type="checkbox"
        onChange={() => props.completedTask(props.toDo.id)}
      />
      <label
        style={{ textDecoration: props.toDo.isDone ? "line-through" : "" }}
      >
        {" "}
        {props.toDo.text}{" "}
      </label>
      <button> delete</button>
    </div>
  );
}
