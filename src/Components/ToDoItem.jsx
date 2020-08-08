import React from 'react'
import "./ToDoItem.css"

export default function ToDoItem(props) {
    return (
        <div>
            <p>{props.toDoText}</p>
          
        </div>
    )
}
