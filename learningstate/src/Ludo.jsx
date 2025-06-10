import { useState } from "react";



export default function (){
let [move,setMove]=useState({red:0,blue:0,green:0,yellow:0});

let bluemove=()=>{
    setMove((prev)=>{
        return {...prev,blue:prev.blue+1}
    });
   
}
let yellowmove=()=>{
    setMove((prev)=>{
        return {...prev,yellow:prev.yellow+1}
    });
   
}
let bgreenmove=()=>{
    setMove((prev)=>{
        return {...prev,green:prev.green+1}
    });
   
}
let redmove=()=>{
    setMove((prev)=>{
        return {...prev,red:prev.red+1}
    });
   
}

return <div>

<h2>blue = {move.blue}</h2>
<button onClick={bluemove}>+1</button>
<h2>red = {move.red}</h2>
<button onClick={redmove}>+1</button>
<h2>green = {move.green}</h2>
<button onClick={bgreenmove}>+1</button>
<h2>yellow = {move.yellow}</h2>
<button>+1</button>

   
</div>
}