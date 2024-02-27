import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return <>
    
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
  <Link className="navbar-brand ps-5" to="">START FRAMEWORK</Link>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav  ms-auto pe-5  ">
      <Link className="nav-link" to="About">ABOUT</Link>
      <Link className="nav-link" to="Protofolio">PORTFOLIO</Link>
      <Link className="nav-link" to="Contact">CONTACT</Link>
    </div>
  </div>
</nav>

    </>
}

export default Navbar
