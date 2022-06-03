import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        const getData = async () => {
            let res = await fetch('http://localhost:8080/products')
            let d = await res.json()
            setData(d)
        }
        getData();
    },[])
  return (
    <div>
        i am Products
        {
            data.map((el)=>{
                return (
                    <div key={el.id} >
                        <Link to={`/products/${el.id}`} >  
                            {el.name}  
                        </Link>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Products