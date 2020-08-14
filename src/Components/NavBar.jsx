import React, { useState } from "react";
import "./NavBar.css";

export default function NavBar(props) {
  const [tempUsrInput, setTempUsrInput] = useState("");

  const addBtnHandler = (e) => {
    e.preventDefault();
    if (!tempUsrInput) return;
    props.addTaskHandler(tempUsrInput);
    setTempUsrInput("");
  };

  const userInputHandler = (e) => {
    if (e.key === "Enter") {
      console.log("enterKey pressed");
      enterKeyHandler(e);
    }
    setTempUsrInput(e.target.value);
  };

  const enterKeyHandler = (e) => {
    if (!tempUsrInput) return;
    console.log("inisde Enter handler");
    props.addTaskHandler(tempUsrInput);
    setTempUsrInput("");
  };

  return (
    <div id="nav-container">
      <button>Search</button>
      <input
        size="25"
        type="text"
        placeholder="Enter your task here !"
        onChange={userInputHandler}
        value={tempUsrInput}
      />
      <button onClick={addBtnHandler}>add</button>
    </div>
  );
}
