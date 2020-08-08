import React from 'react'
import ToDoItem from "./ToDoItem.jsx"
import "./ToDoContainer.css"

export default function ToDoContainer(props) {
    return (
        <div id="to-do-container">
        <ToDoItem toDoText={props.toDoText} />
        
        </div>
    )
}
