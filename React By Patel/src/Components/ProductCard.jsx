import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Skeleton from './Skeleton';

const ProductCard = (Props) => {
const [listProduct,setListProduct]=useState([])

  
   console.log(Props);
   
    const {title,brand,price,rating,images}=Props.myProduct

  const dataFetch=async()=>{
    const data =await fetch("https://fakestoreapi.com/products");
    let result= await data.json();
    console.log(result);
    
  }

  useEffect(()=>{
    dataFetch()
  },[])



// Conditional Rendering
if(listProduct.length===0){
  <Skeleton/>
}


  return (
 <div>
  <button style={{"margin":"10px"}}>Top Rated Prodcuts</button>
    <div className=''>
    
    <img src={images}/>
      <h2>Title:{title}</h2>
      <p> Brand: {brand}</p>
      <p>Price: {price}</p>
      <p>Rating: {rating}</p>
      
    </div>
  </div>
  
  )
}

export default ProductCard
