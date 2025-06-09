import { useState } from 'react'

export default function(){
    let [count,setCount]=useState(6);
    let [like,setLike]=useState(false);

    function trig(){
        setCount(count+1);
        setLike(!like);
    }
    return <>
    <p>Clicks={count}</p>
    <p onClick={trig}>
        {like?<i style={{color:"red"}} class="fa-solid fa-heart"></i>:<i class="fa-regular fa-heart"></i>}
    </p>
    
    </>
}