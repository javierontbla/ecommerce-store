import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import './NavBar.scss'

const NavBar = () => (
  <Fragment>
    <div className='nav-bar'>
      <Link to='/'><img className='logo' src={'https://image.flaticon.com/icons/svg/2290/2290410.svg'}/></Link>
      <div className='btns'>
        <Link className='link' to='/explore'>EXPLORE</Link>
        <Link className='link' to='/signin'>SIGN IN</Link>
      </div>
    </div>
  </Fragment>
)   

export default NavBar