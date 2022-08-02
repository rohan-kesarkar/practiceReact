import { useContext } from "react"
import { BioData } from "./Component1"


const Component3 = ()=>{
const cahnnelName = useContext(BioData)

    return(
        <h1>Hello third component, {cahnnelName} </h1>
    )
}

export default Component3
