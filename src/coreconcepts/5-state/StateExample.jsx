import { useState } from "react"

export default function StateExample(){

    const [count, setCount] = useState(0)
    const clickbtn = () =>{
        setCount(count+1)
    }
    return <>
        <h4>Count Value  {count}</h4>
        <button onClick={clickbtn} className="clickBtn">Click</button>
    </>
     
   
}