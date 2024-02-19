import React from 'react'
import '../components/Navbar.css'

function Navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <nav className="nav">
          <div className="nav_logo">EduConnect</div>
          <ul className="nav_ul">
            <li className="nav_li">
              <a href="/courses" className="nav_a">
                Your Homepage
              </a>
            </li>
            <li className="nav_li">
              <a className="nav_a">Create Course</a>
            </li>

            <li className="nav_li">
              <a href="/login" className="active">
                Log In
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
