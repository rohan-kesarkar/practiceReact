import { useState } from "react"

const ObjectHook = ()=>{
const [object, setObject] = useState({
    name:"Rohan", age:26, country:"India"
})

const updateData = ()=>{
    object.age === 26 ? setObject({...object, age:24}) : setObject({...object, age:26})
}

    return(
        <>
        <h1>Name:{object.name} age:{object.age} Country:{object.country} </h1>
        <button onClick={updateData}>Update</button>
        </>
    )
}

export default ObjectHook