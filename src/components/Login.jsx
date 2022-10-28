import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate=useNavigate()
    
    const[email, setEmail]=useState("")
    const[password, setPassword]=useState("")
   

    async function signin(){

        let item ={email, password}
        console.log(item)
      let result=await fetch("https://dkgicggupnrxldwvkeft.supabase.co/auth/v1/token?grant_type=password",{
            method:"POST",
            headers:{
                'Content-Type':'application/json',
                'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrZ2ljZ2d1cG5yeGxkd3ZrZWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMDI4ODMsImV4cCI6MTk4MTU3ODg4M30.BLLinQ9VEK8_T-JE22WOidlJs_0TFhOb1n3zkSVc7eg'
            },
            body:JSON.stringify(item)
        })
        result=await result.json()
        let token=result.access_token

        console.log(result)
      let p=  localStorage.setItem("user",JSON.stringify(token))
     
      if(token)
      {
        alert("signup successfull")
        navigate("/")
      }
      else{
        alert("InValid Credentials")
      }
        
    }
  return (
    <>
    <h1>Sign in to your account</h1>
    <div className='main'>
        

<div className='col-1-input'>Email address</div>
<input type="email" placeholder='Type name here' value={email} onChange={(e)=>setEmail(e.target.value)} />
<div className='col-1-input'>Password</div>
<input type="password" placeholder='Type name here' value={password} onChange={(e)=>setPassword(e.target.value)}/>
<br />

<button className='btn' onClick={signin}>Sign in</button>
<div className='col-2'>If you have not sign up <label><Link to="/signup">Sign up</Link></label></div>
    </div>
    </>
  )
}

export default Login