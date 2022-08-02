
import React, {useEffect, useState} from 'react'
import UseEffectProps from './UseEffectProps'

const UseEffectApi = () => {
    const [data, setData] = useState([])


    const getUser = async ()=>{
        const responce = await fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        setData(await responce.json())
    }

    useEffect(()=>{
        getUser()
    },[])
  return (
    <div>
       <UseEffectProps data={data}/>
      
    </div>
  )
}

export default UseEffectApi
