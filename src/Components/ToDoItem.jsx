import React, {useState}from "react";
import "./ToDoItem.css";

let onDragTask = null;
let nextDraggingTask = null;
let fromIndex = null;
let toIndex = null;

export default function ToDoItem(props) {
  const [dragging, setDragging] = useState(false)
  
  //
  const dragStartHandler = (e, task) => {
    onDragTask = task
    fromIndex = props.toDoList.findIndex(task => task.id === onDragTask.id)
    setTimeout(() => { setDragging(true) }, 0)
  };
 
  //
  const dragEndhandler = (e, id) =>{
    toIndex = props.toDoList.findIndex (task => task.id === nextDraggingTask)
    props.dndHandler(fromIndex, toIndex)
    setDragging(false);
    onDragTask= null;
  } 

  //
  const dragOverHandler = (e, nextTaskId) => {
    nextDraggingTask = nextTaskId;  
  }

  return (
    <div
      draggable
      onDragStart={(e) => {
        dragStartHandler(e, props.toDo);
      }}
      onDragEnd={(e) => {
        dragEndhandler(e, props.toDo.id)
      }}
      onDragOver={(e) => {
        dragOverHandler(e, props.toDo.id)
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
  )
    }

