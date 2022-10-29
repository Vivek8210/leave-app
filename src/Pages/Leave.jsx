import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import "./Leave.css"
import Home from './Home'
const Leave = () => {
    const[start_date, setStartDate]=useState('')
    const[end_date, setEndDate]=useState('')
    const[reason, setReason]=useState('')
    
    let token=JSON.parse(localStorage.getItem("user"))
    async function handleSubmit(){
        let formItem={start_date,end_date,reason}
        console.log(formItem)

        let leav= await fetch("https://dkgicggupnrxldwvkeft.supabase.co/rest/v1/leaves",{
            method:"POST",
            body:JSON.stringify(formItem),
            headers:{
                'Content-Type': 'application/json',
               'apikey':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrZ2ljZ2d1cG5yeGxkd3ZrZWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMDI4ODMsImV4cCI6MTk4MTU3ODg4M30.BLLinQ9VEK8_T-JE22WOidlJs_0TFhOb1n3zkSVc7eg',
               'Accept': 'application/json',
               'Prefer':'return=representation',
               'Authorization': `Bearer ${token}`
            }
        })
       let res= await leav.json()

        console.log(res)
    }

  return (
    <div className="col-1-main-form">
     <table >
        
  <tr>
    <th>Start date</th>
    <th>End date</th>
    <th>Reason</th>
    <th>Edit</th>
    <th>Submit</th>
  </tr>
  <tr>
    <th><input type="date" placeholder="Start date" value={start_date} onChange={((e)=>setStartDate(e.target.value))}/></th>
    <th><input type="date" placeholder="End date" value={end_date} onChange={((e)=>setEndDate(e.target.value))}/></th>
    <th><input type="text" placeholder='reason' value={reason} onChange={((e)=>setReason(e.target.value))}/></th>
    <th><button>Edit</button></th>
    <th><button className='createLeave' onClick={handleSubmit}>Create leave</button></th>
  </tr>
  
  
   

 
 
</table>
    </div>
  )
}

export default Leave