import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Register.css"
const Register = () => {
    const[name, setName]=useState("")
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")

    const navigate=useNavigate()

    async function signup(){

        let item={name,email,password}
       

      let result=await fetch("https://dkgicggupnrxldwvkeft.supabase.co/auth/v1/signup",{
            method:"POST",
            body:JSON.stringify(item),
            headers:{
                'Content-Type': 'application/json',
               'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrZ2ljZ2d1cG5yeGxkd3ZrZWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMDI4ODMsImV4cCI6MTk4MTU3ODg4M30.BLLinQ9VEK8_T-JE22WOidlJs_0TFhOb1n3zkSVc7eg'
            }
        })
        result=await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        
        navigate("/login")
    }
  return (
    <><h1>Register</h1>
    <div className='main-register'>
        
<div className='col-1-input'>Name</div>
<input type="text" placeholder='Type name here' value={name} onChange={(e)=>setName(e.target.value)}/>
<div className='col-1-input'>Email address</div>
<input type="email" placeholder='Type name here' value={email} onChange={(e)=>setEmail(e.target.value)}/>
<div className='col-1-input'>Password</div>
<input type="password" placeholder='Type name here' value={password} onChange={(e)=>setPassword(e.target.value)}/>
<br />

<button className='btn' onClick={signup}>Sign Up</button>
<div className='col-2'>Already a user? <label><Link to="/login">Login</Link></label></div>
    </div>
    </>
  )
}

export default Register