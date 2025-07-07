import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';




const Navbar = () => {

// let btn="Light"
const[btn,setBtn]=useState("Light");
const[text,setText]=useState(" ")


  return (
   <div className="flex justify-between shadow-lg" >
  <h1 className='text-xl font-bold p-2'>LOGO</h1>
   <ul className='flex w-[35%] mx-5 gap-12 bg-gray-400 py-1 rounded-xl text-center px-2'>
    <li>Home</li>
<li>About</li>
<Link to='/kids'><li>Kids</li></Link>

<Link to="/beauty"><li>Beauty</li></Link> 

<Link to="/grocerry"><li>Grocerry</li></Link> 


<input  className="w-100 bg-gray-300" type="text"  value={text} onChange={(e)=>{
  
  setText(e.target.value)
}}/>
<button onClick={()=>{
  console.log(text);
  
}} className='bg-purple-600 px-3 py-2 text-lg font-semibold rounded-sm text-zinc-200'>Search</button>


<button  className='bg-purple-600 px-3 py-2 text-lg font-semibold rounded-sm text-zinc-200' onClick={()=>{
  if (btn ==="Light") {
    let body=document.body;
    body.style.backgroundColor="  White"
     setBtn("Dark")
  }
  else{
     let body=document.body;
    body.style.backgroundColor="Black"
    setBtn("Light")
  }
  console.log(btn);
  
}}>{btn}</button>
   </ul>
   <div>
  

   </div>
   </div>
 
   
   
   
   
   
  )
}

export default Navbar
