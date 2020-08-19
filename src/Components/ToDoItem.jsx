import React, {useState, useRef}from "react";
import "./ToDoItem.css";

export default function ToDoItem(props) {
  const [dragging, setDragging] = useState(false)
  const draggTask = useRef();

  // https://www.youtube.com/watch?v=Q1PYQPK9TaM
  const dragStartHandler = (e, task) => {
    draggTask.current = task
    console.log("drag Task is: ", draggTask.current)
    setTimeout(() =>{
      setDragging(true);
    }, 0)
  };
 //
  const dragEndhandler = (e, id) =>{
    setDragging(false);
  }
  //
  const dragEnterHandler = (e, id) => {
  }
  //
  const dragOverHandler = (e, nextTaskId) => {
  
    console.log("id is: ", draggTask.current)

    const fromIndex = props.toDoList.findIndex( task => 
       task.id === props.toDo.id
    )
    const toIndex = props.toDoList.findIndex( task => 
      task.id === nextTaskId
    )


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
  );
}
