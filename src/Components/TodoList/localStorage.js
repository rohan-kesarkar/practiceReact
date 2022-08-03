import React, {useEffect, useState} from 'react'
import {AiFillFileAdd} from  'react-icons/ai'
import {AiOutlineEdit} from  'react-icons/ai'
import {BsPenFill} from  'react-icons/bs'
import {BsPlusSquareFill} from  'react-icons/bs'
import {AiFillRest} from  'react-icons/ai'
import {AiOutlineForm} from 'react-icons/ai'


const getLocalStorageItems = ()=>{
  let list = localStorage.getItem('lists')

  if(list){
    return JSON.parse(localStorage.getItem('lists'))
  }else{
    return []
  }
}


const LocalStorage = () => {
const [item, setItem] = useState("")
const [array, setArray] = useState(getLocalStorageItems())
const [toggleSubmit, setToggleSubmit] = useState(true)
const [isEditItem, setIsEditItem] = useState(null)


const addItem = (e)=>{
    e.preventDefault()
    if(!item){

    }else if(item && !toggleSubmit){
      setArray(
        array.map((elem)=>{
          if(elem.id === isEditItem){
            return{...elem, name:item}
          }
          return elem
        })
      )
      setToggleSubmit(true)
  setItem("")
  setIsEditItem(null)
    }else{
      const addData = { id: new Date().getTime().toString(), name:item }
        setArray([...array, addData])
        setItem("")
    }
  
}

const editItem = (id)=>{
  let newEditItem = array.find((elem)=>{
    return elem.id === id
  })
  setToggleSubmit(false)
  setItem(newEditItem.name)
  setIsEditItem(id)
}

const removeItems = (index)=>{
    const newData = array.filter((elem)=>{
        return elem.id !== index
    })
    setArray(newData)
}

useEffect(()=>{
  localStorage.setItem('lists', JSON.stringify(array))
},[array])


  return (
    <>
    <figure>
        <h1><AiFillFileAdd/></h1>
    <figcaption>Add items here <AiOutlineEdit/></figcaption>
    </figure>
    <div>
    <BsPenFill/> <input   type='text' placeholder="name your item here..." value={item}  onChange={(e)=>setItem(e.target.value)} />
    {
      toggleSubmit ?  <span> <BsPlusSquareFill onClick={addItem} /></span> :  <span> <AiOutlineForm onClick={addItem}/> </span>
    }
   
    </div>
    {
        array.map((add)=>{
            return(
                <div key={add.id} >
                    <h2 >{ add.name }<span> <AiOutlineForm onClick={editItem} /> </span> <span><AiFillRest onClick={()=>removeItems(add.id)} /></span> </h2>
                    
                    
                </div>
            )
        })
    }
   
    </>
  )
}

export default LocalStorage
