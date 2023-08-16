import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <main className='nav'>
      <img className='nav__img' src={logo} alt="logo" />

      <ul className='nav__ul'>
        <li className='nav__ul__li'>link 1</li>
        <li className='nav__ul__li'>link 2</li>
        <li className='nav__ul__li'>link 3</li>
      </ul>
    </main>
  )
}

export default Navbar
