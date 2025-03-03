import React from 'react'
import './Navbar.css'

import {assets} from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div>
        <img src={assets.logo} alt="logo" className='logo' />
        <h1>Admin Panel</h1>
      </div>
      <img src={assets.profile_image} alt="profile image" className='profile'/>
    </div>
  )
}

export default Navbar
