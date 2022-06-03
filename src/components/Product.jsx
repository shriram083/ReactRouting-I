import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Product = (props) => {
    const [value, setValue] = useState({});
    const { id } = useParams()

    useEffect(()=>{
        if(id){
            fetch(`http://localhost:8080/products/${id}`)
            .then((res)=>res.json())
            .then((data)=>{
                console.log('Data',data)
                setValue(data)
            })
        }
    },[id])

  return (
    <div>
        <h1>Product Code : {id}</h1>
        <h1>Name : {value.name}</h1>
        <h1>Price : {value.price}</h1>
    </div>
  )
}

export default Product