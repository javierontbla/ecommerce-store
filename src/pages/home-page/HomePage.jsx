import React, { Fragment } from 'react'

import Directory from '../../components/directory/Directory'
import './HomePage.scss'
import NavBar from '../../components/navbar-component/NavBar'

const HomePage = () => (
    <Fragment>
        <div className='home-page'>
            <Directory />
        </div>
    </Fragment>
)

export default HomePage