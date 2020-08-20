import React, {useState, useEffect ,useRef}from "react";
import "./ToDoItem.css";

let onDragTask = null;
let nextDraggingTask = null;

export default function ToDoItem(props) {
  const [dragging, setDragging] = useState(false)
  
  // https://www.youtube.com/watch?v=Q1PYQPK9TaM
  const dragStartHandler = (e, task) => {
    

    onDragTask = task
    const fromIndex = props.toDoList.findIndex( task => 
      task.id === onDragTask.id
   )
    setTimeout(() =>{
      setDragging(true);
    }, 0)
  };
 //
  const dragEndhandler = (e, id) =>{
// update the State with the next element index
    // nextDraggingTask = props.toDo;
console.log("next Task is:", nextDraggingTask)
    setDragging(false);
    onDragTask= null;
  }
  
  //
  const dragEnterHandler = (e, id) => {
  }
  //
  const dragOverHandler = (e, nextTaskId) => {
    nextDraggingTask = props.toDo;
    // console.log("next task is",nextDraggingTask)
// Do Calculations about the place and pass it to drag EndHander

    // const toIndex = props.toDoList.findIndex( task => 
    //   task.id === nextTaskId
    // )


    // console.log("Drag over is : ", fromIndex)
    // console.log("current Item ID is :" , toIndex)
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
      onDragEnter={(e) => {
        dragEnterHandler(e, props.toDo.id)
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

