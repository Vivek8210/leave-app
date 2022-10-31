import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {AiFillDelete} from 'react-icons/ai'
import {FaEdit} from "react-icons/fa"
import axios from "axios"
import "./Home.css"
import { Link, useNavigate } from 'react-router-dom'
const Home = () => {
    const[data, setData]=useState([])
    const[loading, setLoading]=useState(true)
    const[applicantData, setApplicantData]=useState([])
    const[start_date, setstart_date]=useState('')
    const[end_date, setend_date]=useState('')

    const navigate=useNavigate()
let token=JSON.parse(localStorage.getItem("user"))
// console.log(token)
const handlefilter= (e)=>{
  axios.get(`https://dkgicggupnrxldwvkeft.supabase.co/rest/v1/leaves?start_date=gt.2022-10-01&end_date=lt.2022-10-20&select=*`, {
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
     // console.log(res.data)
  })
  .catch((error) => {
    setLoading(false)
    console.error(error)
  })

  }
  const handlefilter1= (e)=>{
    axios.get(`https://dkgicggupnrxldwvkeft.supabase.co/rest/v1/leaves?start_date=gt.2022-10-10&end_date=lt.2022-10-20&select=*`, {
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
       // console.log(res.data)
    })
    .catch((error) => {
      setLoading(false)
      console.error(error)
    })
  
    }
  

   
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
      
  })
  .catch((error) => {
    setLoading(false)
    console.error(error)
  })
}
     
   
console.log(start_date)

    function getApplicantData(){
     
      axios.get(`https://dkgicggupnrxldwvkeft.supabase.co/rest/v1/leaves?&select=*`, {
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
          // console.log(res.data)
       })
       .catch((error) => {
         setLoading(false)
         console.error(error)
       })
 
}
   
async function deleteLeave(id){
let deleteResult=await fetch("")
}
useEffect(()=>{
  getData()
  getApplicantData()
  if(!token){
    navigate("/login")
  }
},[setLoading,setApplicantData,setData,setstart_date])



// console.log(applicantData)
  return (
    <div>
  
     <h1>Applicant leave details</h1>
     <h3 className='filter-heading'>Filter By Date</h3>
    <div className="col-1-select">
    <button className='filter-btn-home' onClick={getApplicantData}>All</button>
      <button className='filter-btn-home' onClick={handlefilter}>Last six month</button>
      <button className='filter-btn-home' onClick={handlefilter1}>Last one Year</button>
      
    </div>
  
    <div className='col-1-main'>
      {applicantData.map((ele,index)=>( <div className="main" key={index+1}>
         
         <div  className="col-1">
        <div><b>Vivek kumar</b> <br />Frontend developer</div>
    
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMeUoiEXvQaAuunSr5lSsEUDyM48KlpuQdg&usqp=CAU" alt="" /></div>
    
       </div>
       <li><b>leave status</b> : <label>permitted</label></li>
       
       {/* <li><b>Leave Day's</b> : <label>10</label></li><br /> */}
       <div className="col-1-date">
        <li><b>From</b> : <label>{ele.start_date}</label></li>
        <li><b>To</b> : <label>{ele.end_date}</label></li>
       </div>
       
       <li><b>reason</b> : <label>{ele.reason} </label></li>
       <br /><br />
       <div className='btn-home-leave'>
        <div >
        <FaEdit  style={{color:"green", fontSize:"40px",cursor:"pointer"}}/>
        </div>
        <div> 
        <AiFillDelete style={{color:"red", fontSize:"40px",cursor:"pointer"}} onClick={()=>deleteLeave(ele.id)}/>
        </div>
       </div>
       </div>
       
       
      ))}
 
    
 </div>
  </div>
  )
}

export default Home