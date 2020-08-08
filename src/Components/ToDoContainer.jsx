import React from 'react'
import ToDoItem from "./ToDoItem.jsx"
import "./ToDoContainer.css"

export default function ToDoContainer(props) {
    const addTaskHandler = (props.toDo) =>{
        toDo.map((toDo) => {
            <ToDoItem {toDo={props.toDo}} ></ToDoItem>
        })
        console.log("There are some tasks over there !!")
        console.log(toDo);
    }
    return (
        <div id="to-do-container">
            {addTaskHandler}
            
        </div>
    )
   
}
