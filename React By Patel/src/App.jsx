// import { useState } from "react";

import { createBrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import ProductList from "./Components/ProductList";
import Kids from "./Components/Kids";

import Beauty from "./Components/Beauty";
import ProductDeatils from "./Components/ProductDeatils";

import { lazy } from "react";
import CompoA from "./Components/CompoA";
import CompoB from "./Components/CompoB";
import CompoC from "./Components/CompoC";

//  import {Provider}
// Lazy Loading
// Code Spiliting
// Dyanmic import

const Grocerry=lazy(()=> import ("./Components/Grocerry"))







const App=()=>{


 





  return(

<div>

<Navbar/>
<ProductList/>
</div>



  )
};
 export const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },

   {
    path:"/kids",
    element:<Kids/>
  },


  {
    path:"/beauty",
    element:<Beauty/>
  },

    {
    path:"/product/:productId",
    element:<ProductDeatils/>
  },

   {
    path:"/grocerry",
    element:<Grocerry/>
  },

  {
    path:"/compoA",
    element:<CompoA/>
  },

{
    path:"/compoB",
    element:<CompoB/>
  },

{
    path:"/compoC",
    element:<CompoC/>
  },

])



export default App;