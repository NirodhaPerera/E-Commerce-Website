import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/images/nav-logo.svg'
import navprofile from '../../assets/images/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt="" className='nav-logo' />
        <img src={navprofile} alt="" className='nav-profile'/>
    </div>
  )
}

export default Navbar