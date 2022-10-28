import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'
import Display from '../Pages/Display'
import Home from '../Pages/Home'

const MainRouters = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Home/>}/>
        <Route path='/display' element={<Display/>}/>
    <Route path='/signup' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
    </>
  )
}

export default MainRouters