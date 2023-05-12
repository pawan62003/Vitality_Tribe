import React from 'react'
import {Link} from "react-router-dom"

export default function Navbar() {
  return (
    <div className='bg-[#4f46e5] text-white font-extrabold'>
    <div className='flex justify-between w-4/5 py-2 m-auto border border-solid border-[red] items-center'>
      <div>
        <p className=' text-[larger]'>VITALITY TRIBE</p>
      </div>
      <div className='flex justify-between gap-10 text-[smaller]'>
        <Link to={"/workout"}><p>WORKOUT</p></Link>
        <Link to={"/blogs"}><p>BLOGS</p></Link>
        <Link to={"/dashboard"}><p>DASHBOARD</p></Link>
        <Link to={"/register"}><p>REGISTER</p></Link>
        <Link to={"/login"}><p>LOGIN</p></Link>
      </div>
    </div>
    </div>
  )
}


