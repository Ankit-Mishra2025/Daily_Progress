import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useGetSingleProduct from '../Hooks/useGetSingleProduct'

const ProductDeatils = () => {
const {productId}=useParams()

  const singleProduct=  useGetSingleProduct(productId)
   
//  --- It all code is being terminated by custom hook 

// const[singleProduct,setSingleProduct]=useState("")


// const {productId}=useParams();


//     useEffect(()=>{
// fetchProductDetails();
// console.log(singleProduct);

//     },[])

//     const fetchProductDetails=async()=>{
// const data=await fetch(`https://fakestoreapi.com/products/${productId}`);


// const result=await data.json();
// console.log(result);

// setSingleProduct(result)


//     }
    


    const {images,title,brand,price,rating}=singleProduct
  return (


    <div className='product-card'>
    
    <img src={images}/>
      <h2>Title:{title}</h2>/
      <p> Brand: {brand}</p>
      <p>Price: {price}</p>
      {/* <p>Rating: {rating}</p> */}
      
    </div>
    
  )
}

export default ProductDeatils
