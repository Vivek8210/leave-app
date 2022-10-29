import React from 'react'
import { useState } from 'react'
import "./Leave.css"
const Leave = () => {
    const[start_date, setStartDate]=useState('')
    const[end_date, setEndDate]=useState('')
    const[reason, setReason]=useState('')
    
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
               'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjY3MDU5NTgzLCJzdWIiOiI1NjBjODRjNS1kZGI0LTRmNzQtYWJmMy1lNTAxZWQ1ZTRkM2MiLCJlbWFpbCI6InZpdmVrMTIzQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCIsInNlc3Npb25faWQiOiJiYjg3ODk5Zi1jMDQ5LTQ4ZDAtYTcyMS1mOTQ2MWY3YTMyNmMifQ.LxYv0dgpVwEkv_FO8PcdoBbo5WCIhKkinsQVRIn1gbk',
            }
        })
       let res= await leav.json()
        console.log(res)
    }
  return (
    <div className="col-1-main">
     <table >
        <thead>
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
    <th><button onClick={handleSubmit}>Submit</button></th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>10-10-2022</td>
    <td>10-10-2022</td>
    <td>hfklshdfshh</td>
    <td><button>Edit</button></td>
    <td>Submitted</td>
  </tr>
  </tbody>
</table>
    </div>
  )
}

export default Leave