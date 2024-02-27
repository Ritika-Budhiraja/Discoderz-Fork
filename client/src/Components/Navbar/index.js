import React from 'react'
import './Navbar.css'
import logo from './../../Images/logo/logo.png'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {

  return (
    <nav className='navbar'>
      <div className='nav-container'>
        <div className='logo-container'>
          <img className='logo' src={logo} alt='Heal Health Hub' />
        </div>
        <div className='nav-link-container'>
          
          <div className='nav-links'><NavLink to='./login'>Login</NavLink></div>
          <div className='nav-links'><NavLink to='./register'>Register</NavLink></div>
          <div className='nav-links brand-name'><NavLink to='/'>Heal Health Hub</NavLink></div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar