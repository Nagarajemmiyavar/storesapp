import { useState } from 'react';
import React from 'react'

 const Productlist=()=> {
  const [product,setproduct]=useState("");
  const [List,setList]=useState([]);
  
  const add=(e)=>{

   e.preventDefault();
   console.log(product);
   const data={product}
   if (product){
    setList((localStorage)=>[...localStorage,data])
    setproduct("")
   }

  }


  return (
    <div className="ui main">
    <form>
    <input type="text"
    value={product}
    onChange={(e)=>setproduct(e.target.value)}/>
    <br/><br/>
    <button onSubmit={add}>ADD</button>
    </form>
    
    
   {
   List.map((a)=><div>
    <li>{a.product}</li>
    </div>
    )


   }

    
    </div>
  )
}

export default Productlist;

