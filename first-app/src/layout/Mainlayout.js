import React from 'react'
import Navbar from '../components/NavBar'

function Mainlayout({children}) {
  return (
    <div>
    <Navbar></Navbar>
    <div>{children}</div> 
    </div>

  )
}

export default Mainlayout