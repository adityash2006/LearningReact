import { useState } from "react";

function gen(n){
    let arr=[];
    for(let i=0;i<n;i++){
        arr[i]=Math.floor(Math.random()*10);
    }
    return arr;
}

function sum(a){
    return a.reduce((u,b)=>u+b,0);
}

 function Lottery({n,wintick}){
    let [tick,settick]=useState(gen(n));
    let sumo= sum(tick)===wintick;
    let check=()=>{
        settick(gen(n));
    }
return <div>
<h2>Ticket number {tick} sum is {sum(tick)} </h2>
 <h3 >{sumo &&"Congrats you have won"}</h3>
<button onClick={check}>generate</button>
</div>
 }

 export default Lottery;