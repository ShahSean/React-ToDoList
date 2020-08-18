import React, {useState}from "react";
import "./ToDoItem.css";

export default function ToDoItem(props) {
  const [dragging, setDragging] = useState(false)
  // https://www.youtube.com/watch?v=Q1PYQPK9TaM
  const dragStartHandler = (e, id) => {
    setTimeout(() =>{
      setDragging(true);
    }, 0)
  };

  const dragEndhandler = () =>{
    setDragging(false);
  }

  return (
    <div
      draggable
      onDragStart={(e) => {
        dragStartHandler(e, props.toDo.id);
      }}
      onDragEnd={(e) => {
        dragEndhandler(e, props.toDo.id)
      }}
      className={dragging ? "toDoItem dragging" : "toDoItem"}

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
