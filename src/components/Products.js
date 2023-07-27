import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Product from './Product';

export default function Products() {
    const [products , setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([]);
    const getData  =()=>{
      axios.get('https://fakestoreapi.com/products')
      .then((response)=>{
        console.log(response.data);
        setProducts(response.data)
        setFilteredProducts(response.data);
      })
      .catch(error=>console.log(error))
    }
    useEffect(()=>{
      getData()
    },[])

    
    const filterCategory = (catItem) => {
      const result = products.filter((curData) => {
        return curData.category===catItem;
      });
      setFilteredProducts(result);
      
    }
    
    const CategoriesButton = () => {
      return (
        <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button className="btn btn-outline-dark me-2" onClick={()=>setFilteredProducts(products)}>All</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterCategory("men's clothing")}>Men's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterCategory("women's clothing")}>Women's Clothing</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterCategory("jewelery")}>Jewelery</button>
          <button className="btn btn-outline-dark me-2" onClick={()=>filterCategory("electronics")}>Electronic</button>
        </div>
        </>
      )
    }
  return (
    <div>
      <div className="container my-5 py-5">
        <div className="row">
          <div className="col-12 mb-5">
            <h1 className='display-6 fw-bolder text-center'>All Latest Products</h1>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
        <CategoriesButton/>
         {
          filteredProducts.map((product,index)=>(
            <Product key={index} data={product}/>
          ))
          
         }
        </div>
      
      </div>
    </div>
  )
}
