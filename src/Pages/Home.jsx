import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"
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
              'Authorization': 'token'
            }
          })
          .then((res) => {
            console.log(res.data)
          })
          .catch((error) => {
            console.error(error)
          })
    },[setLoading])
  return (
    <div>Home</div>
  )
}

export default Home