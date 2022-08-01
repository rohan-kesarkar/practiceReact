import { useState } from "react"

const Hooks =()=>{
    const [state, setState] = useState("This is me")
     const handleState = ()=>{
        state === "This is me" ?  setState("React Developer") :  setState("This is me")
 }
return(
    <div>
        <h1> {state}</h1>
        <button onClick={handleState} >Click me</button>
    </div>
)
}

export default Hooks