import React from "react";
import "./ToDoItem.css";

export default function ToDoItem(props) {
  return (
    <div className="toDoItem">
      <input
        type="checkbox"
        data-id={props.todo.id}
        onChange={props.completedTask}
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
