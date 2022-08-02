import { createContext } from "react"
import Component2 from './Component2'


const BioData =createContext()

const Component1 = ()=>{
    return(
        <BioData.Provider value={"this is use context"} >
            <Component2/>
        </BioData.Provider>
    )
}

export default Component1
export {BioData}