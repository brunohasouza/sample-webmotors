import React from 'react'
import { Link } from 'react-router-dom'

import logo from './../../../assets/images/webmotors-logo.png'

import './style.css'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="Webmotors"/>
      </Link>
    </header>
  )
}

export default Header