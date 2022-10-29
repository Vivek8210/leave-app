import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
import "./Home.css"
const Home = () => {
    const[data, setData]=useState([])
    const[loading, setLoading]=useState(true)
let token=JSON.parse(localStorage.getItem("user"))
// console.log(token)
    useEffect(()=>{
        setLoading(true)

         axios.get('https://dkgicggupnrxldwvkeft.supabase.co/auth/v1/user', {
            headers: {
                'Content-Type':'application/json',
              'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRrZ2ljZ2d1cG5yeGxkd3ZrZWZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjYwMDI4ODMsImV4cCI6MTk4MTU3ODg4M30.BLLinQ9VEK8_T-JE22WOidlJs_0TFhOb1n3zkSVc7eg',
              'Accept': 'application/json',
              'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjY3MDU5NTgzLCJzdWIiOiI1NjBjODRjNS1kZGI0LTRmNzQtYWJmMy1lNTAxZWQ1ZTRkM2MiLCJlbWFpbCI6InZpdmVrMTIzQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsInNlc3Npb25faWQiOiJiYjg3ODk5Zi1jMDQ5LTQ4ZDAtYTcyMS1mOTQ2MWY3YTMyNmMifQ.LxYv0dgpVwEkv_FO8PcdoBbo5WCIhKkinsQVRIn1gbk',
            }
          })
          .then((res) => {
            setLoading(false)
            setData(res.data)
            // console.log(res.data)
          })
          .catch((error) => {
            console.error(error)
          })
    },[setLoading])
    console.log(data)
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
   
    <div className="main">
   <div className="col-1">
    <div>Vivek kumar <br />Frontend developer</div>

    <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXMeUoiEXvQaAuunSr5lSsEUDyM48KlpuQdg&usqp=CAU" alt="" /></div>

   </div>
   <li>leave status : <label>cancled</label></li>
   <br />
   <li>Leave Day's : <label>10</label></li><br />
   <div className="col-1-date">
    <li>From : <label>10-10-2022</label></li>
    <div>To : <label>10-10-2022</label></div>
   </div>
   <br />
   <li>reason : <label>due to fever </label></li>
    </div>
  </div>
  )
}

export default Home