import React, { useEffect, useState } from 'react'

const UseEffect2 = () => {
    const [size, setSize] = useState(window.screen.width)

    const actualWidth = ()=>{
        setSize(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize", actualWidth)
        return(()=>{
            window.removeEventListener("resize", actualWidth)
        })
    })
  return (
    <div>
      <h1>My current window size is :</h1>
      <p>{size}</p>
    </div>
  )
}

export default UseEffect2
