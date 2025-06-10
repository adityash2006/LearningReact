import { useState } from "react";

export default function(){
    let [todo,settodo]=useState([]);
    let [newtodo,setnewtodo]=useState("");

    let newtask=(event)=>{
        setnewtodo(event.target.value);
    }

    let addtask=()=>{
        settodo([...todo,newtodo]);
        setnewtodo("");
    }

    return <div><h2>Todo is all what you want in life !</h2>


    <input onChange={newtask} placeholder="add your task" value={newtodo} />
    <button onClick={addtask}>Add</button>
    <ul>
        {todo.map((task)=>(<li>{task}</li>))}
    </ul>




    </div> 


}