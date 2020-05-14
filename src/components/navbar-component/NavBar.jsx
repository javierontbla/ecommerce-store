import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import './NavBar.css'
import giraffe from '../icons/giraffe.svg'

const NavBar = ({ history, match }) => (
  <Fragment>
    <nav>
      <input type='checkbox' id='check'/>
      <label htmlFor='check' className='icon'>
        <i className='fas fa-bars'></i>
      </label>
      <label className='logo' onClick={() => history.push('/')}><img className='home-logo' src={giraffe}/></label>
      <ul>
        <li className='option'><a onClick={() => history.push('/')}>home</a></li>
        <li className='option'><a onClick={() => history.push(`${match.url}explore`)}>explore</a></li>
        <li className='option'><a onClick={() => history.push(`${match.url}signin`)}>sign in</a></li>
      </ul>
    </nav>
  </Fragment>
)   

export default withRouter(NavBar)