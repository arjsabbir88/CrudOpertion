import React from 'react'
import NavBar from '../Component/NavBar'
import { Outlet } from 'react-router'
import Footer from '../Component/Footer'

const Layout = () => {
  return (
    <div>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout
