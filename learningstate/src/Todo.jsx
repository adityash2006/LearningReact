import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function(){
    let [todo,settodo]=useState([{task:"Code",id:uuidv4(),isdone:false}]);
    let [newtodo,setnewtodo]=useState("");

    let newtask=(event)=>{
        setnewtodo(event.target.value);
    }
    let addtask=()=>{
        settodo((list)=>{
            return [...list,{task:newtodo,id:uuidv4(),isdone:false}]});
        setnewtodo("");
    }

    let deltask=(id)=>{
        settodo(
            (del)=>todo.filter((del)=>del.id!=id));

    }
    let upper=()=>{
        settodo((prev)=>(
            prev.map((d)=>{
            return {...d,task:d.task.toUpperCase()}
        })));
    }
let capital=(id)=>{
    settodo((prev)=>(
            prev.map((d)=>{
                if(d.id===id){
            return {...d,task:d.task.toUpperCase()}}
            else{
                return d;
            }

        })));
}

let done=(id)=>{
    settodo((prev)=>(
            prev.map((d)=>{
                if(d.id===id){
            return {...d,isdone:!d.isdone}}
            else{
                return d;
            }

        })));
}

    return <div><h2>Todo List </h2>
    <input onChange={newtask} placeholder="add your task" value={newtodo} />
    <button onClick={addtask}>Add</button>
    <ul>
        {todo.map((todo)=>(<li  key={todo.id}>
            <span style={todo.isdone?{textDecoration:"line-through"}:{textDecoration:"none"}}>{todo.task}</span>
            <button onClick={()=>deltask(todo.id)}>Delete</button>
            <button onClick={()=>capital(todo.id)}>Capitalize</button>
            <button onClick={()=>done(todo.id)}>mark as done</button>
            </li>))}
    </ul>
    <br />
    <button onClick={upper}>capitalize all</button>

    </div> 


}