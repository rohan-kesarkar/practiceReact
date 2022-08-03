import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {BsFillCartPlusFill}  from "react-icons/bs";
import './Fil.css'

const Filter = () => {
    const [product, setProduct] = useState([])

    const getdata = async ()=>{
        const data = await fetch("https://fakestoreapi.com/products")
        setProduct(await data.json())
    }

    useEffect(()=>{
        getdata()
    },[])

const incresingOrder = ()=>{
    setProduct((product)=>{
        const dataToSort = [...product]
        dataToSort.sort((a,b)=>Number(a.price)-Number(b.price))
        return dataToSort
    })
    
}
const decresingOrder = ()=>{
    setProduct((product)=>{
        const dataToSort = [...product]
        dataToSort.sort((a,b)=>Number(b.price)-Number(a.price))
        return dataToSort
    })
}

const incresingRating = ()=>{
    
    setProduct((product)=>{
        const dataToSort = [...product]
        dataToSort.sort((a,b)=>Number(a.rating.rate)-Number(b.rating.rate))
        return dataToSort
    })
}
const decresingRating = ()=>{
     
    setProduct((product)=>{
        const dataToSort = [...product]
        dataToSort.sort((a,b)=>Number(b.rating.rate)-Number(a.rating.rate))
        return dataToSort
    })
}

const searchProduct = (e)=>{
    e.preventDefault()
   const data = product.filter(a=>a.title.toLowerCase().startsWith(e.target.value.toLowerCase()))
   setProduct(data)
}

const selectProduct = (e)=>{
    const data = product.filter((rec)=>rec.category === e.target.value)
    setProduct(data)
}


  return (
    <>
    <div>
        <h1>Shopping Mart   <span style={{float : "right", paddingRight:"30px", paddingTop:"1px"}} > <BsFillCartPlusFill/></span></h1>
        
       
    </div>
     <div>
                        <input type='text' placeholder="search your product here..." style={{ width:"300px"}} onKeyUp={searchProduct} />
                        <span> <span>Sort By Price :</span> </span>
                        
                        <button onClick={incresingOrder} >Low to High</button>
                        <button onClick={decresingOrder} >High to Low</button>
                        <span> Sort by Rating :</span>
                       
    <button onClick={incresingRating} >Low to High</button>
    <button onClick={decresingRating} >High to Low</button>
   
    {/* <span>Category :</span> */}
    {/* <select onChange={selectProduct} >
        <option disabled selected>select</option>
        {product.map((rec)=>{
            return(
            <option>
                {rec.category}
            </option>
            )
            
        })}
    </select> */}
   
  <div className='cat'> <div className='ca'>Category :</div> <div className='c'><Form.Select style={{width:"250px", height:"40px"}} onChange={selectProduct}>
      <option>Select Category</option>
      {product.map((rec)=>{
            return(
            <option key={rec.id}>
                {rec.category}
            </option>
            )
        })}
     </Form.Select></div></div>
     {/* </span> */}
  </div>
    {/* {
        // product.map((elem)=>{
        //     return(
                
        //         <div key={elem.id} >
                   
        //       <img src={elem.image} alt="img" style={{height:"200px", width:"300px"}} />
        //       <br/>
        //       Title:{elem.title}
        //       <br/>
        //       Price:{elem.price}
        //       <br/>
        //       Category:{elem.category}
        //         </div>
        //     )
        // })
    } */}
        <Row xs={1} md={3} className="g-4">
        { product.map((elem)=> (
          <Col key={elem.id}>
            <Card>
              <Card.Img variant="top" src={elem.image} />
              <Card.Body>
                <Card.Title>{elem.title}</Card.Title> <Card.Text>
                  ${elem.price}
                </Card.Text>
                <Card.Text>
                  {elem.description}
                </Card.Text>
                <Button variant="light">More Details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    
    </>
  )
}

export default Filter