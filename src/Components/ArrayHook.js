import { useState } from "react"

const ArrayHook = ()=>{
    const bioData = [
        {
            id:0, name:"Rohan", age:24
        },
        {
            id:1, name:"hkcn", age:26
        }
    ]
    const [state, setState] = useState(bioData) 

    const clearData = ()=>{
       state === bioData ?  setState([]) : setState(state)
    }
    const removeData = (id)=>{
     const meNewData = state.filter((elem)=>{
        return elem.id !== id
    })
     setState(meNewData)
    }


    return(
<>
{
    state.map((currElem)=>{
        return(
            <h1 key={currElem.id} >Name:{currElem.name} Age:{currElem.age}<button onClick={()=>removeData(currElem.id)} > remove </button></h1>
            
        )
       
    })
    

}

<button onClick={clearData} >Clear</button>

</>
    )
}
export default ArrayHook

