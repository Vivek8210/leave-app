import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
  
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

  const navigate=useNavigate()
  let token=JSON.parse(localStorage.getItem("user"))
  //console.log(token)

  // logout function .............................
  async function logout(){
    let res= await fetch("https://dkgicggupnrxldwvkeft.supabase.co/auth/v1/logout",{
      method:"POST",
      
      headers:{
          'Content-Type': 'application/json',
         'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrZ2ljZ2d1cG5yeGxkd3ZrZWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMDI4ODMsImV4cCI6MTk4MTU3ODg4M30.BLLinQ9VEK8_T-JE22WOidlJs_0TFhOb1n3zkSVc7eg',
         'Authorization': `Bearer ${token}`
      }
  })
 
  localStorage.removeItem('user');
  
  navigate("/login")
  alert("logout successfully")
  //console.log(token)
  }
  // console.log(token)
  return (
    <header>
    <h3>Leave app</h3>
    <nav ref={navRef}>
     
    <Link to="/">Home</Link>
           <Link to="/leave">Create Leave</Link>
           <Link to="/signup">Sign up</Link>

           {token ? (
               <Link onClick={logout}>Logout</Link> 
           ) : (
             <Link to="/login">Login</Link>
           )}
      <button
        className="nav-btn nav-close-btn"
        onClick={showNavbar}>
        <FaTimes />
      </button>
    </nav>
    <button className="nav-btn" onClick={showNavbar}>
      <FaBars />
    </button>
  </header>
  );
};

export default Navbar;
