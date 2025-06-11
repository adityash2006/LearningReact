import { useState } from "react"
export default function Commentform({addcom}){

    let [comment,setcomment]=useState({
        username:"",
        remarks:"",
        rating:1
    });
    let handleinputchange=(event)=>{
        setcomment((prev)=>{return {...comment,[event.target.name]:event.target.value}});
    }
    let formsub=(event)=>{
        event.preventDefault();
        addcom(comment);
        
        setcomment({username:"",
        remarks:"",
        rating:1})
    }

    return <>
    <form onSubmit={formsub}>
    <label htmlFor="username">Username</label>
    <input type="text" id="username" placeholder="enter your name" value={comment.username} onChange={handleinputchange} name="username"/> <br /><br /><br />
    <label htmlFor="remarks">remarks</label>
    <textarea type="text" id="remarks" placeholder=" your comment" value={comment.remarks} onChange={handleinputchange} name="remarks"/><br /><br /><br />
    <label htmlFor="rating">rating</label>
    <input type="number" max={5} min={1} id="rating" placeholder="enter your name" value={comment.rating} onChange={handleinputchange} name="rating"/>
    <button>Submit</button>
    </form>
    </>
}