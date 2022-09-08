import React from 'react'
import logo from '../assets/logo.svg'

function Header() {
  return (
    <header className='header'>
      <div className='header-stats'>
        <p className='header-stats-caption'>My balance</p>
        <h3 className='header-stats-balance'>$921.48</h3>
      </div>
      <img className='header-logo' src={logo} alt="" />
    </header>
  )
}

export default Header