import React, {useState} from 'react'
import "./NavBar.css"


export default function NavBar(props) {
const [tempUsrInput, setTempUsrInput] = useState("")



const addBtnHandler= (e) => {
    e.preventDefault();
    if(!tempUsrInput) return
    props.addTaskBtnHandler(tempUsrInput)
    setTempUsrInput('')
}
const userInputHandler= (e) =>{
    setTempUsrInput(e.target.value)

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






