import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
    <Navbar/>
  
    <main class='min-h-[80vh] bg-gray-100 p-4'>

        <Outlet/>

    </main>
    
    </>
  )
}

export default RootLayout