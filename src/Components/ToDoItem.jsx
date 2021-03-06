import React, { useState } from "react";
import "./ToDoItem.css";

let onDragTask = null;
let nextDraggingTask = null;
let fromIndex = null;
let toIndex = null;

export default function ToDoItem(props) {
  const [dragging, setDragging] = useState(false);
  const [onEdit, setOnEdit] = useState(false);
  const [text, setText] = useState(props.toDo.text);
  // const inputRef = useRef(null);

  //
  const dragStartHandler = (task) => {
    onDragTask = task;
    fromIndex = props.toDoList.findIndex((task) => task.id === onDragTask.id);
    setTimeout(() => {
      setDragging(true);
    }, 0);
  };

  //
  const dragEndhandler = () => {
    toIndex = props.toDoList.findIndex((task) => task.id === nextDraggingTask);
    props.dndHandler(fromIndex, toIndex);
    setDragging(false);
    onDragTask = null;
  };

  //
  const dragOverHandler = (nextTaskId) => {
    nextDraggingTask = nextTaskId;
  };

  // useEffect(() => {
  //   console.log('running effect', inputRef);
  //   if (inputRef.current) {
  //     inputRef.current.focus();
  //   }
  // }, []);

  return onEdit ? (
    <form
      className="on-edit-task"
      onSubmit={(e) => {
        e.preventDefault();
        setOnEdit(false);
        props.editTaskHandler(props.toDo.id, e.target.elements[0].value);
      }}
    >
      <input
        name="text"
        type="text"
        value={text}
        // ref={inputRef}
        onChange={(e) => setText(e.target.value)}
        className="on-edit-input"
      />
    </form>
  ) : (
    <div
      draggable
      onDragStart={(e) => {
        dragStartHandler(props.toDo);
      }}
      onDragEnd={(e) => {
        dragEndhandler();
      }}
      onDragOver={(e) => {
        dragOverHandler(props.toDo.id);
      }}
      className={dragging ? "toDoItem dragging" : "toDoItem"}
    >
      <input
        type="checkbox"
        onChange={() => props.completedTask(props.toDo.id)}
        className="check-box"
      />

      <label
        id="task-text"
        onDoubleClick={() => {
          setOnEdit(true);
        }}
        style={{
          textDecoration: props.toDo.isDone ? "line-through" : "",
        }}
      >
        {props.toDo.text}
      </label>
      <button onClick={() => props.delete(props.toDo.id)} className="del-btn"> delete</button>
    </div>
  );
}
