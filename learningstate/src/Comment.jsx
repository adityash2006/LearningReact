import { useState } from 'react'
import Commentform from './Commentform.jsx'


export default function Comment(){

    let [com,setcom]=useState([{
        username:"drishyam",
        remarks:"acoustic play",
        rating:1
    }]);

    let addcom=(newcom)=>{
        setcom((c)=>[...c,newcom])
    }

    return <>
        {com.map((c,idx)=>(
            <div key={idx} style={{border:"2px solid pink",borderRadius:"3px",padding:"3px",margin:"3px"}}>
        <h4>{c.remarks}</h4>
        <span>{c.username} has given a rating of {c.rating}</span>
  </div>
        ))}
        <Commentform addcom={addcom}/>
  </>


}