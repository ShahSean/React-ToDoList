import React from 'react'
import ToDoItem from "./ToDoItem.jsx"
import "./ToDoContainer.css"

export default function ToDoContainer(props) {
    const addTaskHandler = () =>{
        props.toDo.map((toDo) => 
            <ToDoItem toDo={toDo} ></ToDoItem> 
        )
    }
    return (
        <div id="to-do-container">
           boo: 
           <div>
               {addTaskHandler()} 
           </div>
        </div>
    )
   
}
