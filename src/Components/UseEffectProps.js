import React from 'react'
import {FcApproval} from 'react-icons/fc' //search react icons

const UseEffectProps = (props) => { //instead of props ({data}) == destructuring
  return (
    <div>
       {
            props.data.map((resp)=>{
                return(
                    <div key={resp.id}>
                      <img src={resp.thumbnailUrl} alt="img"/>
                      <h4>{resp.title}<FcApproval/></h4>
                    </div>
                )
            })
        }
    </div>
  )
}

export default UseEffectProps
