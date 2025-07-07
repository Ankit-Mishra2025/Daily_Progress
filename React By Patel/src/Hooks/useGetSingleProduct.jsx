import React, { useState } from 'react'
import { useEffect } from 'react'

const useGetSingleProduct = (productId) => {
    const[singleProduct,setSingleProduct]=useState(null)
  
    useEffect(()=>{
fetchSingleProduct()

    },[])
const fetchSingleProduct=async()=>{
    const data=await fetch (`https://fakestoreapi.com/products/ ${productId}`);

    const jsonData= await data.json()
    setSingleProduct(singleProduct)
}

return(
    setSingleProduct(jsonData)
)

}

export default useGetSingleProduct
