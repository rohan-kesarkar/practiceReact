import React from 'react'
import {useLocation} from 'react-router-dom'
//check useHistory hook also

const UseLocationHook = () => {
  const location = useLocation()
  return (
    <div>
      <h2>UseLocationHook</h2>
      
    <h1>Hello,  {location.pathname} </h1>
    </div>
  )
}

export default UseLocationHook
