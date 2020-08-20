import React, {useState, useEffect ,useRef}from "react";
import "./ToDoItem.css";

let onDragTask = null

export default function ToDoItem(props) {
  const [dragging, setDragging] = useState(false)

  
  // https://www.youtube.com/watch?v=Q1PYQPK9TaM
  const dragStartHandler = (e, task) => {
    onDragTask = task
    const fromIndex = props.toDoList.findIndex( task => 
      task.id === onDragTask.id
   )
  //  // /////////////
  //  const getNextDragElement = () => {
  //   const nonDraggingList = [...props.toDoList.splice(fromIndex, 1)];
  //   return nonDraggingList.reduce((closest, tsk) => {
  //       const box = props.toDo.getBoundingCLientRect();
  //       // The space between the center of the box and our mouse cursor
  //       const offset = e.clientY - box.top - box.height /2
  //       // When we are above a Box, we get negtive numbers !
  //     if (offset < 0 && offset > closest.offset) {
  //       return { offset: offset, element: tsk };
  //     } else {
  //       return closest;
  //     }
  //   },
  //   {offset: Number.NEGATIVE_INFINITY}).element
  //   }
  //   console.log("here is the next: ", getNextDragElement())

///////////
    setTimeout(() =>{
      setDragging(true);
    }, 0)
  };
 //
  const dragEndhandler = (e, id) =>{
// update the State with the next element index
    setDragging(false);
    onDragTask= null;
  }
  
  //
  const dragEnterHandler = (e, id) => {
  }
  //
  const dragOverHandler = (e, nextTaskId) => {
// Do Calculations about the place and pass it to drag EndHander
    setTimeout(() =>{
      ;
    }, 2)
    console.log("Dragging over:", nextTaskId, "position is:", e.clientY)
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

