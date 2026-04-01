import { useState } from "react"

export default function EventHandling(){
    
    const [message, setmsg] = useState('');
    const changeEvent=(event)=>{ 
        setmsg(event.target.value)
    }
    return <>
    <input type="text" onChange={changeEvent} placeholder="Type your message" />
    <p>Your text: {message}</p>
    </>
        
}