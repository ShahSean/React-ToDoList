import React, {useState}from "react";
import "./ToDoItem.css";

let onDragTask = null;
let nextDraggingTask = null;
let fromIndex = null;
let toIndex = null;

export default function ToDoItem(props) {
  const [dragging, setDragging] = useState(false)
  const [onEdit, setOnEdit] = useState(false);
  // const [tempUsrInput, setTempUsrInput] = useState(props.toDo.text);

  
  //
  const dragStartHandler = (task) => {
    onDragTask = task
    fromIndex = props.toDoList.findIndex(task => task.id === onDragTask.id)
    setTimeout(() => { setDragging(true) }, 0)
  };
 
  //
  const dragEndhandler = () =>{
    toIndex = props.toDoList.findIndex (task => task.id === nextDraggingTask)
    props.dndHandler(fromIndex, toIndex)
    setDragging(false);
    onDragTask= null;
  } 

  //
  const dragOverHandler = (nextTaskId) => {
    nextDraggingTask = nextTaskId;  
  }
  
  //
  let editTaskHandler = (id) => {
    if (onEdit) {
        return <input 
          type="text" 
          value={props.toDo.text} 
          onChange={props.editTaskHandler(id)}
        /> 
        
    }
  }

  return (
    <div
      draggable
      onDragStart={(e) => {
        dragStartHandler(props.toDo);
      }}
      onDragEnd={(e) => {
        dragEndhandler()
      }}
      onDragOver={(e) => {
        dragOverHandler(props.toDo.id)
      }}
      className={dragging ? "toDoItem dragging" : "toDoItem"}
    >
      <input
        type="checkbox"
        onChange={() => props.completedTask(props.toDo.id)}
      />
      <label
      onDoubleClick={ () => {setOnEdit(true)
            editTaskHandler(props.toDo.id) }}
        style={{ textDecoration: props.toDo.isDone ? "line-through" : "" }}
      >
        {" "}
        {props.toDo.text}{" "}
      </label>
      <button onClick={() => props.delete(props.toDo.id)}> delete</button>
    </div>
  )
    }

