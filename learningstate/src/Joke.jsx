import { useEffect, useState } from "react";

export default function(){

    let [joke,setjoke]=useState({});
    let generate=async()=>{
    let a=await fetch("https://official-joke-api.appspot.com/jokes/random");
    let b=await a.json();
    setjoke({setup:b.setup,punchline:b.punchline})
    console.log(b);
    }
    useEffect(() => {
        generate();  
    }, []);    

    return <div>
        <h3>{joke.setup}</h3>
        <h3>{joke.punchline}</h3>
        <button onClick={generate}>generate</button>
    </div>
}