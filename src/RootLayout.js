import React from 'react'
import { Outlet } from "react-router-dom";
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function RootLayout() {
  return (
    <div>
    <Navbar />
    <div style={{ minHeight: "100vh",position:"relative" }}>
      <div >
        {" "}
        <Outlet />
      </div>
    </div>
    <div style={{bottom:"0",width:"100%",height:"0.1rem",marginTop:"1em"}}>
      <Footer />
    </div>
  </div>
  )
}

export default RootLayout