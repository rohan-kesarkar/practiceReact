import { useReducer } from "react"

const initialState = 0

const reducer = (state, action)=>{
    if(action.type === "INCREMENT"){
        return state+1
    }
    if(action.type === "DECREMENT"){
        return state-1
    }
    return state

}


const UseReducerHook = ()=>{

const [state, dispatch] = useReducer(reducer, initialState)
    return(
        <>
        <h1>{state}</h1>
        <br/>
        <button onClick={()=>dispatch({type:"INCREMENT"})} >INC</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})} >DEC</button>
        
        </>
    )
}

export default UseReducerHook