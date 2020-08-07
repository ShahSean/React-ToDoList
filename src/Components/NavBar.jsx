import React, {useState} from 'react'
import "./NavBar.css"


export default function NavBar(props) {
const [tempUsrInput, setTempUsrInput] = useState("")



const addBtnHandler= (e) => {
    e.preventDefault();
    if(!tempUsrInput) return
    props.addTaskBtnHandler(tempUsrInput)
    console.log("hi this is: ", e)
    setTempUsrInput('')
}
const userInputHandler= (e) =>{
    setTempUsrInput(e.target.value)
    console.log(e.target.value)
}


    return (
        <div id="nav-container">
        <button>Search</button>
        <input size="30" type="text" placeholder="Enter your task here !" 
            onChange={userInputHandler}/>
        <button onClick={addBtnHandler}>add</button>
        </div>
    )
}



/////////////////////

// const handleSubmit = e => {
//     e.preventDefault();
//     if(!value) return;
//     addToDo(value);
//     setValue('');
// }



// const addToDo = text => {
//     cosnt newToDos = [...todos, {text}];
//     setToDos(newToDos)
// }

