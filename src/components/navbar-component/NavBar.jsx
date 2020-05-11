import React, { Fragment } from 'react'

import '../../tailwind.generated.css'
import './NavBar.css'

/*
        <ul className="flex justify-center mt-3">
        <li className="m-2">
          <a className="link inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" href="#1">HOME</a>
        </li>
        <li className="m-2">
          <a className="link inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" href="#2">EXPLORE</a>
        </li>
        <li className="m-2">
          <a className="link inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white" href="#1">SIGN IN</a>
        </li>
      </ul>
*/
const NavBar = () => (
  <Fragment>
    <div className='navbar-cover'>
      <ul className="flex justify-center">
        <li className="m-2">
          <img src={'https://image.flaticon.com/icons/svg/2290/2290410.svg'}/>
        </li>
        </ul>
    </div>
  </Fragment>
)   

export default NavBar