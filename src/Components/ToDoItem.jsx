import React from 'react'
import "./ToDoItem.css"

export default function ToDoItem(props) {
    return (
        <div>
            <p>Make a to do list</p>
            <p>Take out Trash</p>
            <p>{props.toDoText}</p>
        </div>
    )
}
