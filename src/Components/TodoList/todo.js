import React, {useState} from 'react'
import {AiFillFileAdd} from  'react-icons/ai'
import {AiOutlineEdit} from  'react-icons/ai'
import {BsPenFill} from  'react-icons/bs'
import {BsPlusSquareFill} from  'react-icons/bs'
import {AiFillRest} from  'react-icons/ai'

const Todo = () => {
const [item, setItem] = useState("")
const [array, setArray] = useState([])


const addItem = (e)=>{
    e.preventDefault()
    if(!item){

    }else{
        setArray([...array, item])
        setItem("")
    }
  
}

const removeItems = (id)=>{
    const newData = array.filter((elem, index)=>{
        return index !== id
    })
    setArray(newData)
}


  return (
    <>
    <figure>
        <h1><AiFillFileAdd/></h1>
    <figcaption>Add items here <AiOutlineEdit/></figcaption>
    </figure>
    <div>
    <BsPenFill/> <input   type='text' placeholder="name your item here..." value={item}  onChange={(e)=>setItem(e.target.value)} />
    <span> <BsPlusSquareFill onClick={addItem} /></span>
    </div>
    {
        array.map((add, index)=>{
            return(
                <div key={index} >
                    <h2 >{ add }<span><AiFillRest onClick={()=>removeItems(index)} /></span> </h2>
                    
                    
                </div>
            )
        })
    }
   
    </>
  )
}

export default Todo
