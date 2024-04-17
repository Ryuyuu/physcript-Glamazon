import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo2to.png'
import navProfile from '../../assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} alt="" className="nav-logo" />
      <h1 className='title'>Phsycript</h1>
      <img src={navProfile} className='nav-profile' alt="" />
    </div>
  )
}

export default Navbar
