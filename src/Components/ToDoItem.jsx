import React from "react";
import "./ToDoItem.css";

export default function ToDoItem(props) {
  // https://www.youtube.com/watch?v=Q1PYQPK9TaM
  const dragStartHandler = (e, id) => {
    console.log("drag started event: ", e, "ID is: ", id);
  };
  return (
    <div
      className="toDoItem"
      draggable
      onDragStart={(e) => {
        dragStartHandler(e, props.toDo.id);
      }}
    >
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
      <button onClick={() => props.delete(props.toDo.id)}> delete</button>
    </div>
  );
}
