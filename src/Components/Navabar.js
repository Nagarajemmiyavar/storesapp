import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';


const Navabar=()=>{
  return (
    <div>
    <ul>
    <Link to="/home"><li>Home</li></Link>
    <Link to="/regestration"><li>Regestration</li></Link>
    <Link to="/About"><li>About</li></Link>
    <Link to="/addproducts"><li>Addproducts</li></Link>
    <Link to="/productlist"><li>Productlist</li></Link>
    </ul>
    </div>
  )
}

export default Navabar;