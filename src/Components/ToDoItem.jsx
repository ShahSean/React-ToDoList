import React from 'react'
import "./ToDoItem.css"

export default function ToDoItem(props) {
    return (
        <div className="toDoItem">
            <label>{props.toDoText}</label>
          
        </div>
    )
}
