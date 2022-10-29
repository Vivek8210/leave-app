import React from 'react'
import { Link } from 'react-router-dom'

import "./Navbar.css"
const Navbar = () => {
  return (
<>

<div className='mainContainer'>
    <div>Leaves app</div>
    <div className='nav'>
    <Link to="/ ">Home</Link>
   <Link to="/leave">Leave</Link>
   <Link to="/signup">Sign up</Link>
   <Link to="/login">Login</Link> 
    </div>
  
</div>
</>
  )
}

export default Navbar