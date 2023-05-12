import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import PagenotFound from '../Pages/PagenotFound'
import DashboardPage from '../Pages/DashboardPage'
import Food from '../Pages/Food'
import Exercise from '../Pages/Exercise'
import PrivateRoute from '../Components/ProvateRoute'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/register' element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path='/dashboard' element={
        <PrivateRoute>
          <DashboardPage />
        </PrivateRoute>} />
      <Route path='/food' element={<PrivateRoute><Food /></PrivateRoute>} />
      <Route path="/exercise" element={<PrivateRoute><Exercise /></PrivateRoute>} />
      <Route path="*" element={<PagenotFound />} />
    </Routes>
  )
}

export default MainRoutes