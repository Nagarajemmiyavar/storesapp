


import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Navabar from './Navabar';
import About from './About';
import Header from './Header';
import Addproducts from './Addproducts';
import Productlist from './Productlist';
import Regestration from './Regestration';
import Home from   './Home';
import Fotter from './Fotter';


function App() {
  return (
    
    
    <div>
  <Header/>
  <h1 style={{textAlign:"center",color:'yellowgreen'}}>GURUSIDDESHWAR STORES</h1>
  <marquee   >OFFERS ARE AVALIABLE PLEASE HURRY UP!</marquee>
  <Navabar/> 
   
   
     <Routes>  
     <Route path='/home' element={<Home/>}></Route> 
     <Route path='/regestration' element={<Regestration/>}></Route> 
     <Route path='/about' element={<About/>}></Route>
     <Route path='/addproducts' element={<Addproducts/>}></Route>
     <Route path='/productlist' element={<Productlist/>}></Route>
     </Routes>
    <Fotter/>
    </div>
       
   

    
  )
}

export default App;