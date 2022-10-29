import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import "./Home.css"
const Home = () => {
    const[data, setData]=useState([])
    const[loading, setLoading]=useState(true)
    const[applicantData, setApplicantData]=useState([])
let token=JSON.parse(localStorage.getItem("user"))
// console.log(token)
   
function getData(){
  axios.get('https://dkgicggupnrxldwvkeft.supabase.co/auth/v1/user', {
    headers: {
        'Content-Type':'application/json',
      'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrZ2ljZ2d1cG5yeGxkd3ZrZWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMDI4ODMsImV4cCI6MTk4MTU3ODg4M30.BLLinQ9VEK8_T-JE22WOidlJs_0TFhOb1n3zkSVc7eg',
      'Accept': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  })
  .then((res) => {
    setLoading(false)
    setData(res.data)
    //  console.log(res.data)
  })
  .catch((error) => {
    setLoading(false)
    console.error(error)
  })
}
     
   
   

    function getApplicantData(){
      axios.get('https://dkgicggupnrxldwvkeft.supabase.co/rest/v1/leaves?select=*', {
         headers: {
              'Content-Type':'application/json',
           'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrZ2ljZ2d1cG5yeGxkd3ZrZWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMDI4ODMsImV4cCI6MTk4MTU3ODg4M30.BLLinQ9VEK8_T-JE22WOidlJs_0TFhOb1n3zkSVc7eg',
           'Accept': 'application/json',
           'Authorization': `Bearer ${token}`
         }
       })
       .then((res) => {
         setLoading(false)
         setApplicantData(res.data)
           //console.log(res.data)
       })
       .catch((error) => {
         setLoading(false)
         console.error(error)
       })
 
}
useEffect(()=>{
  getData()
  getApplicantData()
},[setLoading,setApplicantData,setData])

 console.log(applicantData)
  return (
    <div>
  
     <h1>Applicant details</h1>
    <div className="col-1-select">
      <select className="col-1-select-option" >
      <option value="all">All</option>
        <option value="current-month">Current month</option>
        <option value="last-month">Last month</option>
        <option value="last-six-month">Last six month</option>
        <option value="last-one-year">Last one year</option>
      </select>
    </div>
  
    <div className='col-1-main'>
      {applicantData.map((ele)=>{
        
        return  <><div className="main">
         
         <div  className="col-1">
        <div>Vivek kumar <br />Frontend developer</div>
    
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMeUoiEXvQaAuunSr5lSsEUDyM48KlpuQdg&usqp=CAU" alt="" /></div>
    
       </div>
       <li>leave status : <label>cancled</label></li>
       <br />
       <li>Leave Day's : <label>10</label></li><br />
       <div className="col-1-date">
        <li>From : <label>{ele.start_date}</label></li>
        <div>To : <label>{ele.end_date}</label></div>
       </div>
       <br />
       <li>reason : <label>{ele.reason} </label></li>
       </div>
       
       </>
      })}
 
    
 </div>
  </div>
  )
}

export default Home