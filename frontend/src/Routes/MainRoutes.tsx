import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import PagenotFound from '../Pages/PagenotFound'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Signup/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="*" element={<PagenotFound/>}/>
    </Routes>
  )
}

export default MainRoutes